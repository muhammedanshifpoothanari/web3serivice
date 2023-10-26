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
const amqp = require("amqplib");
const { updateCntrl: updateCntrlAbstraction } = require('../controller/userSpecific/update.controller');
const queue1 = "reciept";
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rabbitMqurl = process.env.RABBITMQURL;
        const connection = yield amqp.connect(`${rabbitMqurl}`);
        const channel = yield connection.createChannel();
        //////////queue1\\\\\\\\\\\
        yield channel.assertQueue(queue1, { durable: false });
        yield channel.consume(queue1, (message) => {
            if (message) {
                console.log(" [x] Received ", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                updateCntrlAbstraction(dataFromMessage).then((result) => {
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        console.log("[*] Waiting for messages. To exit press CTRL+C");
    }
    catch (err) {
        console.warn(err);
    }
}))();
