import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];
  showHobbies: boolean;
  data: IPost[];

  constructor(private _http: Http) {
    this.name = 'Daniel';
    this.email = 'daniel.quinterospinto@gmail.com';
    this.website = 'http://localhost:4200';
    this.hobbies = ['run', 'read', 'write'];
    this.showHobbies = false;
    this.getData();
  }

  getData() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json())
     .subscribe(data => {
            this.data = data;
            console.log(this.data);
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby) {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
}

interface IPost {
  id: string;
  title: string;
  body: string;
}
