import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { PortFolio } from '../../port-folio';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  active = 1;
  profileDetails:PortFolio[] = [];

  constructor(private userService:UserService){
    this.getPortFolioDetails();
  }

  getPortFolioDetails(){
    this.userService.getPortFolioDetails().subscribe(result =>{
      this.profileDetails = result;

    })
  }

}
