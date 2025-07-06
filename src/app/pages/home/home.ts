import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from "../../service/api/api";
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  imports: [
    MatSidenavModule, 
    MatListModule, 
    MatIconModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatProgressSpinnerModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    CommonModule
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  users: any = [];

  homework = [
    { name: 'Maths', progress: 50 },
    { name: 'Physics', progress: 70 },
    { name: 'English', progress: 23 },
    { name: 'Biology', progress: 80 }
  ];

  documents = [
    { name: 'Presentation.ppt', icon: 'slideshow', date: '22 Sept 2021' },
    { name: 'Document.docs', icon: 'description', date: '16 Sept 2021' },
    { name: 'Excel Sheet', icon: 'grid_on', date: '12 Sept 2021' }
  ];

  schedule = [
    { subject: 'Literature', chapter: 'Chapter #2 & 3', date: '21 Sept 2021' },
    { subject: 'Mathematic', chapter: 'Chapter #2 & 3', date: '21 Sept 2021' },
    { subject: 'English', chapter: 'Chapter #2 & 3', date: '21 Sept 2021' }
  ];

  feedbacks = [
    { message: 'I am glad that you completed your weekly homework.', date: '12 Sept 2021' },
    { message: 'Keep it up and try to do more practice.', date: '12 Sept 2021' }
  ];

  constructor(private userService: Api) {}

  async ngOnInit() {
    // await this.userService.getUsers().then(data => {
    //   let temp: any = data;
    //   this.users = temp[0]
    // })

    console.log(this.users)
  }

}
