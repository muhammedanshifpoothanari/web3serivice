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
const { getAllUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllCntrl = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getAllCntrl', 'hdhdhhdhd');
        const truck = yield wrappedFunction();
        console.log('hdhdhhdhd', truck, 'hdhdhhdhd');
        if (truck && truck !== undefined)
            return truck;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllCntrl
};
