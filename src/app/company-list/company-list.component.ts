import { Component,OnInit } from '@angular/core';
import {Company} from '../company';
import { CompaniesService } from '../companies.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{

  companies:Company[];
  constructor(private route:ActivatedRoute,private companiesService:CompaniesService){
    this.companies=[]
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies():void{
    this.companiesService.getCompanies().subscribe(companies=>this.companies=companies);
  }

}
