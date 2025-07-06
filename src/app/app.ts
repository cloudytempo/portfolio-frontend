import { Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatListModule, MatIconModule, CommonModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio-frontend';
  private route = inject(ActivatedRoute);
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  user: any

  folders: any[] = [
    {
      icon: 'home',
      name: 'Home',
      position: 'top',
    },
    {
      icon: 'photo_library',
      name: 'Gallery',
      position: 'top',
    },
    {
      icon: 'event_note',
      name: 'Events',
      position: 'top',
    },
    {
      icon: 'payment_arrow_down',
      name: 'Expenses',
      position: 'top',
    },
    {
      icon: 'settings',
      name: 'Settings',
      position: 'bottom',
    },
        {
      icon: 'logout',
      name: 'Log Out',
      position: 'bottom',
    },
  ];

  topFolders = this.folders.filter(f => f.position === 'top');
  bottomFolders = this.folders.filter(f => f.position === 'bottom');
  
    constructor(){
      const snapshot = this.route.snapshot;
      console.log(snapshot.url)
      // this.sidenav.toggle();
    }

    onActivate($ev: any){
    console.log($ev)
  }

    toggleMenu() {

  }

}
