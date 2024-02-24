import { NonEmptyArray } from "type-graphql";
import { RecipeResolver } from "./recipe/resolver";

export const resolvers: NonEmptyArray<Function> = [RecipeResolver];
