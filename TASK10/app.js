const e = require("express");
const m = require("mysql2");

const a = e();
a.use(e.json());

const p = m
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "college_db_5R4",
        port: 3306,
    })
    .promise();

// READ
a.get("/studentdetails_5R4", async (q, s) => {
    try {
        const [r] = await p.query("SELECT * FROM studentdetails_5R4");
        s.json(r);
    } catch (er) {
        s.status(500).json({ message: er.message });
    }
});

// CREATE
a.post("/studentdetails_5R4", async (q, s) => {
    const { name, course } = q.body;
    try {
        const [r] = await p.execute(
            "INSERT INTO studentdetails_5R4 (name,course) VALUES (?,?)",
            [name, course],
        );
        s.status(201).json({ id: r.insertId, name, course });
    } catch (er) {
        s.status(500).json({ error: er.message });
    }
});

// UPDATE
a.put("/studentdetails_5R4/:id", async (q, s) => {
    const { id } = q.params;
    const { name, course } = q.body;
    try {
        const [r] = await p.execute(
            "UPDATE studentdetails_5R4 SET name=?,course=? WHERE id=?",
            [name, course, id],
        );
        if (r.affectedRows === 0)
            return s.status(404).json({ message: "Student not found" });

        s.json({ message: "Student updated successfully", id, name, course });
    } catch (er) {
        s.status(500).json({ error: er.message });
    }
});

// DELETE
a.delete("/studentdetails_5R4/:id", async (q, s) => {
    const { id } = q.params;
    try {
        const [r] = await p.execute(
            "DELETE FROM studentdetails_5R4 WHERE id=?",
            [id],
        );
        if (r.affectedRows === 0)
            return s.status(404).json({ message: "Student not found" });

        s.json({ message: `Student with ID ${id} deleted successfully` });
    } catch (er) {
        s.status(500).json({ error: er.message });
    }
});

a.listen(3000, () => console.log("Server running on port 3000"));
