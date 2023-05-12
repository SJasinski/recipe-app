import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/add', component: RecipeFormComponent },
  { path: 'recipes/edit/:id', component: RecipeFormComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
