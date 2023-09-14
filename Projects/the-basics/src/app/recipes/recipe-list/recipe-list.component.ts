import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test.', 'https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*'),
    new Recipe('A Test Recipe', 'This is simply test.', 'https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*'),
  ];

  constructor() {}

  ngOnInit() {
    
  }
}
