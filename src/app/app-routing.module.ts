import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqsComponent } from './components/faqs/faqs.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentReminderComponent } from './components/payment-reminder/payment-reminder.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'budget', component: BudgetComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'faqs', component: FaqsComponent},
  { path:'forgot-password', component: ForgotPasswordComponent},
  { path:'login', component: LoginComponent},
  { path:'payment-reminder', component: PaymentReminderComponent},
  { path:'profile', component: ProfileComponent},
  { path:'register', component: RegisterComponent},
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
