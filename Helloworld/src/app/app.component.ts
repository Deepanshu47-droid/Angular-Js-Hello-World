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
  userName: string = ''; //Two way binding
  nameError: string = '';

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
  onInput($event: InputEvent) {
    this.onUserNameChange()
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = " ❌ Name is Incorrect!";
  }
}
