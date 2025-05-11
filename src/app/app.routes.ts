import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'contact', component: ContactComponent },
];
