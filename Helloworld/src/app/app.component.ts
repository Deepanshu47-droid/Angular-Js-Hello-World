import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "../assets/BL_logo_square.jpg";
  url = "https://www.bridgelabz.com";
  userName = ''; //Two way binding

  ngOnInit(): void {
    this.title = `Hello, from BridgeLabz!`;
  }

  onClick($event: MouseEvent){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onUserNameChange() {
    this.title = `Hello ${this.userName} from BridgeLabz!`;
  }
}
