import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelRegisterationFormComponent } from './model-registeration-form/model-registeration-form.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'courses', component: CourseComponent},
  {path:'add-course', component:AddCourseComponent},
  {path:'login-form', component: LoginFormComponent},
  {path: 'model-registration-form', component:ModelRegisterationFormComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
