"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const walletSchema = new mongoose_1.Schema({
    from: String,
    to: String,
    status: String,
    gasUsed: Number
});
module.exports = {
    walletSchema: walletSchema
};
