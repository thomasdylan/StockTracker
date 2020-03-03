import axios from "axios";

export default {
    // Gets all stock by user
    getStock: function (user) {
        return axios.get("/api/stocks/" + user);
    },
    // Gets the stock with the given id
    getStockId: function (id) {
        return axios.get("/api/stocks/" + id);
    },
    // Update stock with the given id
    updateStock: function (id, data) {
        return axios.put("/api/stocks/" + id, data);
    },
    // Deletes the stock with the given id
    deleteStock: function (id) {
        return axios.delete("/api/stocks/" + id);
    },
    // Saves a stock to the database
    saveStock: function (StockData) {
        return axios.post("/api/stocks", StockData);
    }
};