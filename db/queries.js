const Pool = require("pg").Pool;
require("dotenv").config({ path: "../../project_env/.env" }); //just for dev environment
const transporter = require("../components/nodeMailerClient");
const format = require("pg-format");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const createAccountAuto = async (req, res) => {
    const { name, email, phone, address } = req.body.customer;
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const existingUser = response1.rows[0];
        if (!existingUser) {
            const query2 = {
                text: "INSERT INTO users (name, email, password, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *",
                values: [name, email, "12345", phone, address],
            };
            const response2 = await pool.query(query2);
            const newUser = response2.rows[0];
            newUser.new = true;
            return newUser;
        } else {
            return existingUser;
        }
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const createAccount = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const existingUser = response1.rows[0];
        if (!existingUser) {
            const query2 = {
                text: "INSERT INTO users (name, email, password, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING id",
                values: [name, email, password, phone, address],
            };
            const response2 = await pool.query(query2);
            res.status(201).send(`User added with ID: ${response2.rows[0].id}`);
        } else {
            res.status(409).send("Current email already exists");
            return null;
        }
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const editAccount = async (req, res) => {
    const id = req.params.id;
    const { name, email, password, phone, address, newPassword } = req.body;

    try {
        const query1 = {
            text: "SELECT password FROM users WHERE id = $1",
            values: [id],
        };
        const response1 = await pool.query(query1);
        const userPassword = response1.rows[0].password;
        if (userPassword !== password) {
            return res.status(401).send("Invalid password.");
        }

        let query;
        if (newPassword) {
            query = {
                text: "UPDATE users SET name = ($1), email = ($2), phone = ($3), address = ($4), password = ($6) WHERE id = ($5) RETURNING id",
                values: [name, email, phone, address, id, newPassword],
            };
        } else {
            query = {
                text: "UPDATE users SET name = ($1), email = ($2), phone = ($3), address = ($4) WHERE id = ($5) RETURNING id",
                values: [name, email, phone, address, id],
            };
        }

        const response = await pool.query(query);
        res.status(200).send(`User with id = ${response.rows[0].id} updated`);
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const user = response1.rows[0];
        if (!user || user.password !== password) {
            return res.status(401).send("Invalid email or password.");
        }
        const sendUser = { ...user };
        delete sendUser.password;
        // const accessToken = jwt.sign(sendUser, accessTokenSecret, { expiresIn: "1m" });
        // const refreshToken = jwt.sign(sendUser, refreshTokenSecret, { expiresIn: "100m" });
        // const tokens = { accessToken, refreshToken };
        // res.status(200).send(tokens);
        res.status(200).send(sendUser);
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const sendForgottenPassword = async (email, password) => {
    let info = await transporter.sendMail({
        from: '"Bortik Project" <cart@bortikproject.com>',
        to: email,
        subject: "Bortik Project. Восстановление пароля.",
        text: "Ваш пароль успешно восстановлен",
        html: `
        <div>Пароль успешно восстановлен!</div>
        <div>Ваш пароль: ${password}</div>
        <br>
        <br>
        <div>С уважением,</div>
        <div>Служба поддержки Bortik Project</div>
        `,
    });
    console.log(info);
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const query1 = {
        text: "SELECT password FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const passwordObj = response1.rows[0];
        if (passwordObj) {
            sendForgottenPassword(email, passwordObj.password)
                .then(() => {
                    res.status(200).send("Mail sent");
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        } else {
            res.status(404).send("Email not found");
        }
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const createOrder = async (req, res, userID) => {
    const { cart, date, priceType, sum } = req.body;

    const arrData = [];
    for (let i = 0; i < cart.length; i++) {
        const item = [];
        item.push(cart[i].article);
        item.push(cart[i].title);
        item.push(cart[i].number);
        item.push(cart[i].price);
        item.push(cart[i].sum);
        item.push(userID);
        item.push(date);
        arrData.push(item);
    }

    try {
        const sql = format("INSERT INTO sold_items (article, title, number, price, sum, customer_id, date) VALUES %L RETURNING id", arrData);
        const response = await pool.query(sql);
        if (response.rows.length > 0) {
            const arrOfItemsId = response.rows.map((item) => item.id);
            console.log(arrOfItemsId);

            const query2 = {
                text: "INSERT INTO orders (customer_id, date, price_type, items, sum) VALUES($1, $2, $3, $4, $5) RETURNING id",
                values: [userID, date, priceType, arrOfItemsId, sum],
            };
            const response2 = await pool.query(query2);
            return response2.rows[0].id;
        }
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const getHistory = async (req, res) => {
    const { userID } = req.body;
    const query1 = {
        text: "SELECT * FROM orders WHERE customer_id = $1",
        values: [userID],
    };
    try {
        const response1 = await pool.query(query1);
        const history = response1.rows;
        const result = [];
        await Promise.all(
            history.map(async (order) => {
                const query2 = {
                    text: "SELECT * FROM sold_items WHERE id = ANY ($1)",
                    values: [order.items],
                };
                const response2 = await pool.query(query2);
                const items = response2.rows;
                const itemsWithImages = items.map((item) => {
                    item.img = "https://smartikon.by/uploads/" + item.article + ".webp";
                    return item;
                });
                const newOrder = { ...order };
                newOrder.items = itemsWithImages;
                result.push(newOrder);
            })
        ).then(() => {
            res.status(200).send(result);
        });
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

module.exports = {
    createAccountAuto,
    createAccount,
    login,
    forgotPassword,
    editAccount,
    createOrder,
    getHistory,
};
