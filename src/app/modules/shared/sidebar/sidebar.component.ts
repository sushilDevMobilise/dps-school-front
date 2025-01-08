import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type MenuItem = {
  id: number;
  menu_desc: string;
  icon: string;
  link?: string; // Optional for parent items
  children?: MenuItem[]; // Optional property for child items
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuArr: MenuItem[] = [
    { id: 1, menu_desc: 'Dashboard', icon: '', link: '/dashboard' },
    {
      id: 2,
      menu_desc: 'Academic Management',
      icon: '', // Set your icon here
      children: [
        { id: 15, menu_desc: 'Daily Task', icon: '', link: '/daily-task' },
        { id: 3, menu_desc: 'Assignment', icon: '', link: '/assignment' },
        { id: 5, menu_desc: 'Report Card', icon: '', link: '/report-card' },
        { id: 10, menu_desc: 'Library', icon: '', link: '/library' },
        { id: 11, menu_desc: 'Time-Table', icon: '', link: '/time-table' },
      ],
    },
    {
      id: 3,
      menu_desc: 'Communication',
      icon: '', // Set your icon here
      children: [
        { id: 16, menu_desc: 'Notice Board', icon: '', link: '/notice' },
        { id: 8, menu_desc: 'Important Contact', icon: '', link: '/important-contact' },
        { id: 9, menu_desc: 'Query', icon: '', link: '/query' },
        { id: 7, menu_desc: 'Event', icon: '', link: '/event' },
        { id: 13, menu_desc: 'Important Links', icon: '', link: '/important-links' },
      ],
    },
    {
      id: 4,
      menu_desc: 'Record & Certifications',
      icon: '', // Set your icon here
      children: [
        { id: 14, menu_desc: 'Attendance & Leave', icon: '', link: '/attendance-leave' },
        { id: 6, menu_desc: 'Certificate', icon: '', link: '/certificate' },
        { id: 18, menu_desc: 'Photo Gallery', icon: '', link: '/photo-gallery' },
      ],
    },
    {
      id: 5,
      menu_desc: 'School Operations',
      icon: '', // Set your icon here
      children: [
        { id: 17, menu_desc: 'Fee', icon: '', link: '/fee' },
        { id: 12, menu_desc: 'Holiday List', icon: '', link: '/holiday' },
      ],
    },
  ];
  
  // Function to toggle the visibility of child menus
  toggleMenu(itemId: number): void {
    const menuElement = document.getElementById(`child-menu-${itemId}`) as HTMLElement;
    if (menuElement) {
      const isVisible = menuElement.style.display === 'block';
      menuElement.style.display = isVisible ? 'none' : 'block';
    }
  }
}
