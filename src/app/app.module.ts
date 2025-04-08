import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    NotFoundComponent,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
