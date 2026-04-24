const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// Create the connection pool
const pool = mysql
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: " ", // your mysql pwd
        database: " ", // your db name
        port: 3307, // your mysql port no
    })
    .promise(); // Use .promise() for async/await support

// READ: Fetch all students from MySQL
app.get("/studentdetails", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM studentdetails");
        res.json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});

// CREATE: Add a new student
app.post("/studentdetails", async (req, res) => {
    const { name, course } = req.body;

    try {
        const [result] = await pool.execute(
            "INSERT INTO studentdetails (name, course) VALUES (?, ?)",
            [name, course],
        );

        res.status(201).json({
            id: result.insertId,
            name,
            course,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// UPDATE: Modify a student record by ID
app.put("/studentdetails/:id", async (req, res) => {
    const { id } = req.params;
    const { name, course } = req.body;

    try {
        const [result] = await pool.execute(
            "UPDATE studentdetails SET name = ?, course = ? WHERE id = ?",
            [name, course, id],
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json({
            message: "Student updated successfully",
            id,
            name,
            course,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// DELETE: Remove a student record by ID
app.delete("/studentdetails/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.execute(
            "DELETE FROM studentdetails WHERE id = ?",
            [id],
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json({
            message: `Student with ID ${id} deleted successfully`,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
