import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelRegisterationFormComponent } from './model-registeration-form/model-registeration-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { LaptopListComponent } from './product-list/laptop-list/laptop-list.component';
import { MobileListComponent } from './product-list/mobile-list/mobile-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'courses', component: CourseComponent},
  {path:'add-course', component:AddCourseComponent},
  {path:'login-form', component: LoginFormComponent},
  {path: 'model-registration-form', component:ModelRegisterationFormComponent},
  {path: 'course-detail/:id', component: CourseDetailComponent},
  {path: 'pipes', component: PipesComponent},
  {path: "products", component:ProductListComponent,
  children: [
    {path:'laptop-list', component: LaptopListComponent},
    {path: 'mobile-list',component:MobileListComponent}
  ]
},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
