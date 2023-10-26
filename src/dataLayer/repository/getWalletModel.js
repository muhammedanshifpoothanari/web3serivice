"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const getWalletModel = () => {
    const entityName = 'walletInfo';
    const { walletSchema } = require('../database/schema/walletInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!walletSchema)
        throw new Error('wallet schema not found!');
    return mongoose_1.default.model(entityName, walletSchema);
};
module.exports = {
    getWalletModel
};
