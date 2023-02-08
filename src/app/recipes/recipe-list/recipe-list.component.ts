import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_31/1895935/220804-recipe2x1-sj-119.jpg' )
  ]


  constructor(){

  }
  ngOnInit(){

  }

}
