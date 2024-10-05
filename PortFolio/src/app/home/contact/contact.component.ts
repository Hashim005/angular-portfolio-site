import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  active = 1;
  contactDetails:Contact[] = []

  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails(){
    this.userService.getContactDetails().subscribe(result =>{
      this.contactDetails = result;
      // console.log("details is feched", this.contactDetails);

    })
  }

  showDetails(view:number){
    this.active = view
  }

}
