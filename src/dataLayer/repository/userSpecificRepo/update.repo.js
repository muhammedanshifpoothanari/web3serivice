"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getWalletModel: modelToUpdateWallet } = require('../getWalletModel');
const updateWallet = (updatedWalletData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(updatedWalletData, 'jhjgvfreer');
    if (!updatedWalletData) {
        throw new Error('updated user data must be provided!');
    }
    const walletModel = modelToUpdateWallet();
    try {
        const newWallet = new walletModel(Object.assign(Object.assign({}, updatedWalletData), { createdAt: new Date() }));
        // Save the new truck to the database
        const doneTheJob = yield newWallet.save();
        if (!doneTheJob)
            return false;
        // Return the newly created truck
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the wallet in the database: ${error}`);
    }
});
module.exports = {
    updateWallet,
};
