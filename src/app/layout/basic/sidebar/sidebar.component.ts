import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  data = [
    { title: 'Grids', icon: 'home' ,menu: [{ name: 'user-grid', link: '/component/user' }, { name: 'product-grid', link: '/component/product' }] },
  ];

}
