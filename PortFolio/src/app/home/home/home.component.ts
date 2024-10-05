import { PortFolio } from './../../port-folio';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { Contact } from '../../contact';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  active = 1
  profileDetails:PortFolio[] = [];
  contactDetails:Contact[] = [];

  profileName:string = '';
  profileAbout:string = '';
  profileJobTitle:string = '';
  profileUrl:string = '';
  profileExperiences:string = '';



  constructor(private userService:UserService, private router:Router){

      this.userService.getPortFolioDetails().subscribe((folio: PortFolio[])=>{
        // console.log(folio);

       this.profileDetails = folio

      })

      this.getContactDetails();

  }

  getContactDetails(){
    this.userService.getContactDetails().subscribe(result =>{
      this.contactDetails = result
    })

  }


}
