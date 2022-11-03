import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CategoryPipe } from './pipes/category.pipe';
import {MatButtonModule} from '@angular/material/button';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CategoryPipe,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CoursesModule { }
