import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuArr : any = [
    {
      id : 1,
      menu_desc : "Dashboard",
      icon : "assets/img/radix-icons_dashboard.svg",
      link : "/dashboard"
    },
    {
      id : 2,
      menu_desc : "Notice Board",
      icon : "assets/img/noti.svg",
      link : "/notice"
    },
    {
      id : 3,
      menu_desc : "Assignment",
      icon : "assets/img/assig.svg",
      link : "/assignment"
    },
    {
      id : 4,
      menu_desc : "Fee",
      icon : "assets/img/noti.svg",
      link : "/reminder"
    },
    {
      id : 5,
      menu_desc : "Report Card",
      icon : "assets/img/noti.svg",
      link : "/reportCard"
    },
    {
      id : 6,
      menu_desc : "Certificate",
      icon : "assets/img/noti.svg",
      link : "/certificate"
    },
    {
      id : 7,
      menu_desc : "Event",
      icon : "assets/img/noti.svg",
      link : "/admission"
    },
    {
      id : 8,
      menu_desc : "Important Contact",
      icon : "assets/img/noti.svg",
      link : "/important-contact"
    },
    {
      id : 9,
      menu_desc : "Query",
      icon : "assets/img/noti.svg",
      link : "/query"
    },
  ];
}
