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
const { getAllByStatusRepo: getAllByStatusRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStatusWrapper = require('../utility');
const getAllByStatusExecute = (dependency, status) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllByStatusUseCase:');
    console.log('dependency:', dependency);
    const walletData = yield dependency(status);
    if (walletData === null) {
        return false;
    }
    return walletData;
});
module.exports = getAllByStatusWrapper(getAllByStatusRepository, getAllByStatusExecute);
