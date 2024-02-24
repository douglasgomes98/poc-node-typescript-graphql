import { ApolloServer } from "@apollo/server";
import fastifyApollo from "@as-integrations/fastify";
import cors from "@fastify/cors";
import fastify from "fastify";
import { buildSchema } from "type-graphql";
import { resolvers } from "./modules";

export async function bootstrap() {
  const app = fastify();

  app.register(cors);

  app.get("/", async (_, reply) => reply.redirect("/graphql"));

  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers,
  });

  const apollo = new ApolloServer({
    introspection: true,
    schema,
  });

  await apollo.start();

  await app.register(fastifyApollo(apollo));

  await app
    .listen({
      host: "0.0.0.0",
      port: 3333,
    })
    .then(() => {
      console.log(`Server running at http://localhost:${3333}`);
    });
}
