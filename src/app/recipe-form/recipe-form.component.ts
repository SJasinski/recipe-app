import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'models/recipe';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.less'],
})
export class RecipeFormComponent implements OnInit {
  recipeId: number | null = null;
  recipe: Recipe = {
    id: 0,
    name: '',
    ingredients: '',
    instructions: '',
  };

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['id'] ? parseInt(this.route.snapshot.params['id']) : null;

    if (this.recipeId !== null) {
      this.recipeService.getRecipe(this.recipeId).subscribe((recipe) => {
        this.recipe = recipe;
      });
    }
  }

  onSubmit(): void {
    if (this.recipeId === null) {
      this.recipeService.addRecipe(this.recipe).subscribe(() => {
        this.router.navigate(['/recipes']);
      });
    } else {
      this.recipeService.updateRecipe(this.recipe).subscribe(() => {
        this.router.navigate(['/recipes']);
      });
    }
  }
}
