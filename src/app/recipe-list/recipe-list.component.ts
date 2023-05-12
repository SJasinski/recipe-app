import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (data: Recipe[]) => this.recipes = data,
      (error) => console.error(error)
    );
  }

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id).subscribe(
      () => this.loadRecipes(),
      (error) => console.error(error)
    );
  }
}
