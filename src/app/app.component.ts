import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hot-toast-circular-app-ref';

  ngOnInit(): void {
    throw new Error("That's an oopsie!")
  }
}
