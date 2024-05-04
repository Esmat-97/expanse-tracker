import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone:true,
  imports:[IonicModule ,RouterLink],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  name:string='';

  constructor() { }


  ngOnInit() {
    this.name=localStorage.getItem('name') as string
  }

}
