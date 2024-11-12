const db = require("../config/db");

exports.getData = async (req, res) => {
  try {
    const [theData] = await db.query("SELECT * FROM test_table");
    res.json(theData);
  } catch (err) {
    console.error("Error getting data: ", err);
    res.status(500).send("An error occurred while getting data");
  }
};
