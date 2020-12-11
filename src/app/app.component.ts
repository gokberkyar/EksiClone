import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eksisozlukClone';

  id: number;

  onClicked(id) {
    this.id = id;
    console.log("app comp" + id);
    
  }

}

