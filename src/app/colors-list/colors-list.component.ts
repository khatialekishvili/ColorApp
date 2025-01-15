import { Component } from "@angular/core";
import { ChangecolorPipe } from "../changecolor.pipe";
import { HighlightDirective } from "../highlight.directive";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss'],
  imports: [ChangecolorPipe, HighlightDirective, FormsModule, CommonModule]
})
export class ColorsListComponent {
  colorList: string[] = ['Red', 'Green', 'Blue'];

  colorStock: string[] = [
    'Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Cyan', 'Magenta', 'Black', 'Baige'
  ];

  newColor: string = ''; 
  errorMessage: string = '';

  addColor() {
    const trimmedColor = this.newColor.trim();
    const lowercaseStock = this.colorStock.map(color => color.toLowerCase());
    const lowercaseList = this.colorList.map(color => color.toLowerCase());
    const lowercaseColor = trimmedColor.toLowerCase();

    console.log('Adding color:', trimmedColor);

    if (!trimmedColor) {
      this.errorMessage = 'Color name cannot be empty!';
      return;
    }

    if (!lowercaseStock.includes(lowercaseColor)) {
      this.errorMessage = 'Color not in stock!';
    } else if (lowercaseList.includes(lowercaseColor)) {
      this.errorMessage = 'Color already added!';
    } else {
     
      const originalCaseColor = this.colorStock.find(
        color => color.toLowerCase() === lowercaseColor
      );
      if (originalCaseColor) {
        this.colorList.push(originalCaseColor);
        this.errorMessage = ''; 
      }
    }

    this.newColor = ''; 
  }
}
