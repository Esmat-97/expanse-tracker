import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  standalone:true,
  imports:[IonicModule ,RouterLink],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  name:string='';
  id:string='';
  sum:any='';

  constructor(private task:TasksService , private auth:AuthService) { }


  ngOnInit() {


    this.name=localStorage.getItem('name') as string
    this.id=localStorage.getItem('id') as string



    this.task.countAmount(this.id).subscribe( (res:any)=>{
      this.sum=res.total_amount
      console.log(this.sum)
   
    })
  }



}
