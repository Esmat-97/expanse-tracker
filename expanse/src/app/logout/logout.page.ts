import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {  Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone:true,
  imports:[IonicModule],
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private route:Router , private auth:AuthService) { }

  ngOnInit() {
    localStorage.removeItem('name')
localStorage.removeItem('mail')
localStorage.removeItem('id')


const headers = new HttpHeaders({
  'Authorization': 'Bearer ' + localStorage.getItem('token')
  // Add other headers if needed
});


this.auth.logout(headers).subscribe(
  response => {
    // Handle successful logout response
    console.log('Logged out successfully');
    // Optionally, redirect or update UI after logout
  },
  error => {
    // Handle logout error
    console.error('Logout failed:', error);
  }
);


localStorage.removeItem('token')
this.route.navigate(['/login'])

  }

}
