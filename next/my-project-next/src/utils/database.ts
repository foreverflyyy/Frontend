import mongoose from "mongoose";

let isConnected= false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('You have already connected to db');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "training",
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("Mongodb connected");
    } catch(err: any){
        console.log(err)
    }
}