import { Component,OnInit } from '@angular/core';
import { VacanciesService } from '../vacancies.service';
import {Vacancy} from '../vacancy';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute){
    this.vacancies=[]
  }

  ngOnInit(): void {
    this.getVacancyByCompany();
  }

  getVacancyByCompany():void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.vacanciesService.getVacanciesByCompany(id).subscribe(vacancies=>this.vacancies=vacancies)
  }

}
