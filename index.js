import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// Greet Service.
broker.createService({
    name:"saygreet",
    actions:{
        sayHey(ctx){
            return `Hey ${ctx.params.UserName}👋🏻.Glade To see You My Friends 🙋🏻‍♂️ .`
        }
    }
})


async function StartMicroservice() {
    await broker.start();
    const res = await broker.call('saygreet.sayHey',{ UserName : 'kashyap'});
    console.log(res);
    broker.stop();
}

StartMicroservice();