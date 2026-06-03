const e = require("express");
const m = require("mysql2");

const app = e();
app.use(e.json());

const db = m
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "node_exam",
        port: 3306,
    })
    .promise();

app.get("/student", async (req, res) => {
    try {
        const [r] = await db.query("Select * from student;");
        res.json(r);
    } catch (er) {
        res.json({ msg: er.message });
    }
});

app.post("/student", async (req, res) => {
    let { name, course } = req.body;
    try {
        let [r] = await db.execute(
            "insert into student(name,course) values (?,?)",
            [name, course],
        );
        res.json({ id: r.getId, name, course });
    } catch (error) {}
});

app.put("/student/:id", async (req, res) => {
    let { id } = req.params;
    let { name, course } = req.body;
    try {
        let [r] = await db.execute(
            "update student set name = ?,course = ? where id = ?;",
            [name, course, id],
        );
        res.json({ id: r.getId, name, course });
    } catch (error) {}
});

app.delete("/student/:id", async (req, res) => {
    let { id } = req.params;
    try {
        let [r] = await db.execute("delete from student where id = ?;", [id]);
        res.json({ msg: "student deleted successefully" });
    } catch (error) {}
});

app.listen(3000, () => console.log("server is running at port 3000"));
