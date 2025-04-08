import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaniesService } from './companies.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hh_front';
  logged=false;

  username='';
  password='';

  constructor(private companiesService:CompaniesService){}

  ngOnInit(){
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      this.logged = !!token;
    }
    
    
  }

  login(){
    this.companiesService.login({username: this.username, password: this.password}).subscribe(res => {
      console.log(res.access);
      localStorage.setItem('token',res.access);
      this.logged=true;

      this.username='';
      this.password='';
    })
  }

  logout(){
    localStorage.clear();
    this.logged=false;
  }

 
}
