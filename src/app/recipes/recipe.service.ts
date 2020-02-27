import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A Test Recipe',
        'This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWuZVKtymSz5Go_PN2CYYrRFa_Gaw3tGE12zWe8wF8vD-B9Eem',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply another test', 
        'https://pinchofnom.com/wp-content/uploads/2019/11/CampfireStew_099_Pinch-of-Nom-Slimming-Recipes.jpg',
        [
            new Ingredient('Buns', 1),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}