import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxAuthFirebaseUI';
  user: Observable<firebase.User>;

  constructor( private angularFireAuth: AngularFireAuth ) {}

  ngOnInit() {
    this.user = this.angularFireAuth.authState;
  }
}
