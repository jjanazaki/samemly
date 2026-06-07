const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request data and handle cross-origin requests
app.use(express.json());
app.use(cors());              

// Connecting to your exact DBeaver setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123', // Your MySQL password
    database: 'samemly_app'           
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database (samemly_app) successfully!');
});

// ==========================================
// 1. UPDATED SIGN-UP ROUTE (Saves Email too)
// ==========================================
app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body; // <-- Reads email now!

    if (!username || !email || !password) {
        return res.status(400).json({ error: "جميع الحقول مطلوبة (اسم المستخدم، البريد، كلمة المرور)" });
    }

    const sqlQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    
    db.query(sqlQuery, [username, email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: "اسم المستخدم أو البريد الإلكتروني مستخدم بالفعل" });
            }
            return res.status(500).json({ error: "حدث خطأ في قاعدة البيانات", details: err });
        }
        res.status(201).json({ message: "User registered successfully!", userId: result.insertId });
    });
});

// ==========================================
// 2. DETAILED LOGIN ROUTE (Tells exactly what's wrong)
// ==========================================
app.post('/api/login', (req, res) => {
    const { identifier, password } = req.body; // 'identifier' can be username OR email

    if (!identifier || !password) {
        return res.status(400).json({ error: "يرجى إدخال البيانات كاملة" });
    }

    // Searches both username and email columns for a match
    const sqlQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';

    db.query(sqlQuery, [identifier, identifier], (err, results) => {
        if (err) return res.status(500).json({ error: "حدث خطأ في قاعدة البيانات" });

        // CONDITION 1: Checking if the username or email even exists in DBeaver
        if (results.length === 0) {
            return res.status(401).json({ error: "اسم المستخدم أو البريد الإلكتروني غير مسجل" });
        }

        const user = results[0];

        // CONDITION 2: The username exists, so now check if the password matches it
        if (user.password !== password) {
            return res.status(401).json({ error: "كلمة المرور غير صحيحة" });
        }

        // Both conditions passed! Success!
        res.json({ 
            message: "Login successful!", 
            user: { id: user.id, username: user.username, email: user.email } 
        });
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});