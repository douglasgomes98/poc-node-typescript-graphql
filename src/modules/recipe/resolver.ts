import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RecipeService } from "./service";
import { Recipe, RecipeInput } from "./types";

const service = new RecipeService();

@Resolver(Recipe)
export class RecipeResolver {
  @Query(() => [Recipe])
  public getRecipes(): Recipe[] {
    return service.getRecipes();
  }

  @Mutation(() => Recipe)
  public createRecipe(@Arg("input") input: RecipeInput): Recipe {
    return service.create(input);
  }
}
