const DB = require("../../Helper/DBConncetion");
let connection;

const usergetData = async (req, res) => {


    try {
        connection = await DB();

        res.status(200).json({ message: "Successful API" });

    } catch (error) {
        console.error('Database query failed', error);
        res.status(500).json({ error: 'Failed to retrieve data' });
    } finally {
        if (connection) {
            await connection.end();
        }
    }


};

module.exports = { usergetData };
