const amqp = require("amqplib");
const { updateCntrl:updateCntrlAbstraction } = require('../controller/userSpecific/update.controller');

const queue1 = "reciept";

(async () => {
  try {
    const rabbitMqurl = process.env.RABBITMQURL;
    const connection = await amqp.connect(`${rabbitMqurl}`);
    const channel = await connection.createChannel();
 //////////queue1\\\\\\\\\\\
    await channel.assertQueue(queue1, { durable: false });
    await channel.consume(
        queue1,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received ",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());
          updateCntrlAbstraction(dataFromMessage).then((result:any) => {
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
   

    console.log("[*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();