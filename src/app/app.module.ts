import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetComponent } from './components/budget/budget.component';
import { PaymentReminderComponent } from './components/payment-reminder/payment-reminder.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BudgetComponent,
    PaymentReminderComponent,
    ProfileComponent,
    FaqsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
