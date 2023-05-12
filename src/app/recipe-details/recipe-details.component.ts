import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    this.recipeService.getRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
