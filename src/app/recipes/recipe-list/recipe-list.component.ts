import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWuZVKtymSz5Go_PN2CYYrRFa_Gaw3tGE12zWe8wF8vD-B9Eem'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWuZVKtymSz5Go_PN2CYYrRFa_Gaw3tGE12zWe8wF8vD-B9Eem')
  ];

  constructor() { }

  ngOnInit() {
  }

}
