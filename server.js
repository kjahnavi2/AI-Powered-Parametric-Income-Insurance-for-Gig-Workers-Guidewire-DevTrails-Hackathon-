// ===== BASIC SQL BACKEND (GigShield) =====

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// ===== DB CONNECTION =====
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // 👉 put your MySQL password here
  database: "gigshield",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1);
  }
  console.log("✅ MySQL Connected");
});

// ===== HEALTH =====
app.get("/", (req, res) => {
  res.send("GigShield SQL Backend Running 🚀");
});

// ===== REGISTER WORKER =====
app.post("/register", (req, res) => {
  const { name, job, city } = req.body;

  if (!name || !job || !city) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql = "INSERT INTO workers (name, job, city) VALUES (?, ?, ?)";
  db.query(sql, [name, job, city], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "DB error" });
    }
    res.json({ message: "Worker saved", id: result.insertId });
  });
});

// ===== CREATE POLICY =====
app.post("/policy", (req, res) => {
  const { amount, type, premium, risk } = req.body;

  if (!amount || !type) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql =
    "INSERT INTO policies (amount, type, premium, risk) VALUES (?, ?, ?, ?)";
  db.query(sql, [amount, type, premium || 0, risk || 1], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "DB error" });
    }
    res.json({ message: "Policy saved", id: result.insertId });
  });
});

// ===== CREATE CLAIM =====
app.post("/claim", (req, res) => {
  const { city, payout, status, time } = req.body;

  if (!city || !payout || !status) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql =
    "INSERT INTO claims (city, payout, status, time) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [city, payout, status, time || new Date().toLocaleString()],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "DB error" });
      }
      res.json({ message: "Claim saved", id: result.insertId });
    }
  );
});

// ===== GET CLAIMS =====
app.get("/claims", (req, res) => {
  db.query("SELECT * FROM claims ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(rows);
  });
});

// ===== GET POLICIES =====
app.get("/policies", (req, res) => {
  db.query("SELECT * FROM policies ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(rows);
  });
});

// ===== GET WORKERS =====
app.get("/workers", (req, res) => {
  db.query("SELECT * FROM workers ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(rows);
  });
});

// ===== START =====
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
