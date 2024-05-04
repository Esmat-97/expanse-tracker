import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-showexpanses',
  templateUrl: './showexpanses.page.html',
  styleUrls: ['./showexpanses.page.scss'],
})
export class ShowexpansesPage  {

  constructor(private task:TasksService) { }

  comming:any=[];
 id:string='';

  ngOnInit(){
    this.id=localStorage.getItem('id')  as string ;
        this.task.gettasks(this.id).subscribe( (res :any) =>{
          this.comming=res
    console.log(this.comming)
    
        })
    
      }




  /*   */

  // del(id:any){
  //   this.htp.deltasks(id).subscribe(res=>{
    
  //   })
  //     }


}
