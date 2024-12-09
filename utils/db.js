const mongoos = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoos.connect(URI);
        console.log('connection successful to DB');
    } catch (error) {   
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDB
