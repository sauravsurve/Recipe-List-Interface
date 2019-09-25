import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe","This is simply a test", "https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg"),
    new Recipe("Banana Milkshake","Recipe for banana milkshake","https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/banana-milkshake.jpg?itok=64fMJTs1")
  ];
  constructor() { }

  ngOnInit() {
  }

}
