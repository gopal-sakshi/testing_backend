class DatabaseService {
    save(email, price, timestamp) {
        console.log(`Running query: INSERT VALUES (${email}, ${price}, ${timestamp})`);
    }
}

module.exports = DatabaseService