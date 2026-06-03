const e = require("express");
const m = require("mysql2");
const j = require("jsonwebtoken");

const app = e();
app.use(e.json());

const K = "super_secret_key";

const db = m
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "node_exam",
        port: 3306,
    })
    .promise();

const auth = (req, res, next) => {
    let t = req.headers["authorization"];
    t = t && t.split(" ")[1];
    if (!t) return res.status(401).json({ msg: "no token" });
    j.verify(t, K, (er, u) => {
        if (er)
            return res.status(403).json({
                msg: "invalid token",
            });
        req.user = u;
        next();
    });
};

app.post("/login", (req, res) => {
    let { u, p } = req.body;
    if (u === "tim" && p === "p") {
        let t = j.sign({ u }, K, { expiresIn: "2d" });
        return res.json({ token: t });
    }
});

app.get("/student", auth, async (req, res) => {
    try {
        let [r] = await db.query("SELECT * FROM student;");
        res.json(r);
    } catch (error) {
        res.json({ msg: error });
    }
});

app.post("/student", auth, async (req, res) => {
    let { name, course } = req.body;
    try {
        let [r] = await db.execute(
            "insert into student(name,course) values (?,?)",
            [name, course],
        );
        res.json({ id: r.InsertId, name, course });
    } catch (error) {}
});

app.listen(3001, () => console.log("running on port 3001"));
