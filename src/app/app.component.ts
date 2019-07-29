import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHead:boolean=true;

  title = 'client';

  constructor(private router:Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } 
        else if (event['url'] == '/register')
        {
          this.showHead=false;

        } 
        else{
           console.log("this.showHead"+this.showHead);
          this.showHead = true;
        }
      }
    });
  }
}
