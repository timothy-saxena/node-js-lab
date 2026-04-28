const e = require("express");
const m = require("mysql2");
const j = require("jsonwebtoken");

const app = e();
app.use(e.json());

const K = "mgit_secret_key";

const db = m
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "college_db_5r4",
        port: 3306,
    })
    .promise();

// middleware
const auth = (req, res, next) => {
    let t = req.headers["authorization"];
    t = t && t.split(" ")[1];
    if (!t)
        return res
            .status(401)
            .json({ message: "Access Denied: No Token Provided" });

    j.verify(t, K, (err, u) => {
        if (err)
            return res
                .status(403)
                .json({ message: "Invalid or Expired Token" });
        req.user = u;
        next();
    });
};

// login
app.post("/login", (req, res) => {
    let { username, password } = req.body;

    if (username === "admin" && password === "password123") {
        let t = j.sign({ username }, K, { expiresIn: "7d" });
        return res.json({ token: t });
    }

    res.status(401).json({ message: "Invalid Credentials" });
});

// GET
app.get("/s_details", auth, async (req, res) => {
    try {
        let [r] = await db.query("SELECT * FROM s_details");
        res.json(r);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// POST
app.post("/s_details", auth, async (req, res) => {
    let { name, course } = req.body;

    try {
        let [r] = await db.execute(
            "INSERT INTO s_details (name, course) VALUES (?, ?)",
            [name, course],
        );

        res.status(201).json({ id: r.insertId, name, course });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// PUT
app.put("/s_details/:id", auth, async (req, res) => {
    let { id } = req.params;
    let { name, course } = req.body;

    try {
        let [r] = await db.execute(
            "UPDATE s_details SET name=?, course=? WHERE id=?",
            [name, course, id],
        );

        if (!r.affectedRows)
            return res.status(404).json({ message: "Not found" });

        res.json({ message: "Updated successfully", id });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// DELETE
app.delete("/s_details/:id", auth, async (req, res) => {
    let { id } = req.params;

    try {
        let [r] = await db.execute("DELETE FROM s_details WHERE id=?", [id]);

        if (!r.affectedRows)
            return res.status(404).json({ message: "Not found" });

        res.json({ message: `Student ${id} deleted` });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
