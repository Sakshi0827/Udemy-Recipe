import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] =[
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWuZVKtymSz5Go_PN2CYYrRFa_Gaw3tGE12zWe8wF8vD-B9Eem'),
        new Recipe('Another Test Recipe', 'This is simply another test', 'https://pinchofnom.com/wp-content/uploads/2019/11/CampfireStew_099_Pinch-of-Nom-Slimming-Recipes.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}