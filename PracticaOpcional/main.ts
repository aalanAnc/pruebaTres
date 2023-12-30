import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "npm:express@4.17.1";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@8.0.0";
import { Query } from "./resolvers/query.ts";

// connecto to MongoDB
const MONGO_URL = "mongodb+srv://alananconaortiz:12345@practicaoptional.8u5fio9.mongodb.net/?retryWrites=true&w=majority";
await mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json());

app.listen(6000, ()=>{
    console.info("Server strated on port 6000");
});
console.info("MongoDB connected");


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Mutation,
        Query,
    },
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
