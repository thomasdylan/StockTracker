const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;