import {Component,Input} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'a2Menu',
  templateUrl: '../Templates/menu.html',
  styleUrls: ['../Templates/menu.css']
})

export class MenuComponent {
  constructor(private router:Router) {

  }

  menuVDO = {
      isOpen : false,
      hasItems : true,
  };
  
  @Input() menuItems;

  isClicked(event) {
    this.menuVDO.isOpen = !this.menuVDO.isOpen;
  }

  navigateTo(subMenu){
      this.menuVDO.isOpen = false;
      this.router.navigateByUrl(subMenu.stateUrl);
  }
  
}
