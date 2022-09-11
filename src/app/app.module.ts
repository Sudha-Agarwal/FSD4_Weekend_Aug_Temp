import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ModelRegisterationFormComponent } from './model-registeration-form/model-registeration-form.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LaptopListComponent } from './product-list/laptop-list/laptop-list.component';
import { MobileListComponent } from './product-list/mobile-list/mobile-list.component';
import { MobileDetailsComponent } from './product-list/mobile-details/mobile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    AddCourseComponent,
    LoginFormComponent,
    ModelRegisterationFormComponent,
    CourseDetailComponent,
    ProductListComponent,
    LaptopListComponent,
    MobileListComponent,
    MobileDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
