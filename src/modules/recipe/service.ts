import { Recipe, RecipeInput } from "./types";

export class RecipeService {
  private recipes: Recipe[] = [];

  public create(recipe: RecipeInput): Recipe {
    const newRecipe = {
      id: String(this.recipes.length + 1),
      ...recipe,
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }
}
