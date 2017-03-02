import { Component } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: 'navigation-bar.component.html',
  styleUrls: ['navigation-bar.component.css']
})
export class NavigationBarComponent {

  navigationItems = [
    {displayText: 'Home', routerLink: '/home', icon: 'home'},
    {displayText: 'Roster', routerLink: '/roster', icon: 'assignment'},
    {displayText: 'Raid Logs', routerLink: '/raid-logs', icon: 'assessment'},
    {displayText: 'Simulation Craft', routerLink: '/simulation', icon: 'assessment'}
  ];

}
