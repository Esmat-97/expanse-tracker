import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule,RouterLink],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  comming:any=[];


  id:string='';


  constructor(private htp:TasksService) {}



  /*    */

  ngOnInit(){
this.id=localStorage.getItem('id')  as string ;


  }




/*   */

  formdata(main:any){
console.log(main.value)
this.htp.inserttasks(main.value).subscribe(res=>{

      })
  }


}
