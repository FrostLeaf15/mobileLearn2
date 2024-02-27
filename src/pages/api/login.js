// pages/api/login.js
import connection from '../../connection/db.js'; // Sesuaikan dengan lokasi file db.js Anda

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Lakukan validasi login di sini, misalnya dengan melakukan query ke database
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
            if (error) {
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            if (results.length > 0) {
                // Login berhasil
                res.status(200).json({ message: 'Login successful' });
            } else {
                // Kredensial tidak valid
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
