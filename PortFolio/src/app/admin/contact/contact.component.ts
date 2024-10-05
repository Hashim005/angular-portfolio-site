import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactDetails:Contact[] = [];
  contactForm!:FormGroup;
  editMode:boolean = false;
  currentPortfolioId: string | null = null;

  active = 1;
  constructor(private uerService:UserService, private router:Router, private fb:FormBuilder){
    this.getContactDetails();
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message:['', [Validators.required, Validators.minLength(10)]]
    })

  }

  get form(){
   return this.contactForm.controls
  }

  getContactDetails(){
    this.uerService.getContactDetails().subscribe(result =>{
      this.contactDetails = result
    })
  }

  onSubmit(){
    if(this.contactForm.valid){
      const contact:Contact = this.contactForm.value
      if(this.editMode && this.currentPortfolioId){
        contact.id = this.currentPortfolioId;
        this.uerService.updateContactDetails(contact).subscribe(result =>{
          // console.log("contact details successfully updated", result);
          this.resetForm();

        })
      }
      else{
        this.uerService.addContactDetails(contact).subscribe(result => {
          //  console.log('Contact details added successfully', result);
            this.resetForm()
        })

      }
    }
  }

  resetForm(){
    this.contactForm.reset();
    this.editMode = false;
    this.currentPortfolioId = null;
    this.getContactDetails();

  }
  onEditCancel(){
    this.resetForm();
  }

  onEdit(contact:Contact){
    this.editMode = true;
    this.currentPortfolioId = contact.id!;
    this.contactForm.patchValue({
      name:contact.name,
      email:contact.email,
      phone:contact.phone,
      message:contact.message
    });

  }

  deleteContactDetails(id:string | undefined){
    this.uerService.deleteContactDetails(id).subscribe(result =>{
      // console.log("this contact successfully deleted");
      this.getContactDetails();

    })

  }

  logout(){
    //clear user data in local storage
    this.uerService.logout();
    this.router.navigate(['/login'])
  }

}
