import { PortFolio } from './../../port-folio';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';





@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {

  portFolioForm !: FormGroup;
  // imagePreview: string | ArrayBuffer | null = null;
  // selectedFile: File | null = null;
  profileDetails:PortFolio[] = []
  editMode:boolean = false;
  currentPortfolioId: string | null = null;

  active = 1;
  constructor(private uerService:UserService, private router:Router, private fb:FormBuilder ){
    this.getProfileDetails()
  }
  ngOnInit(): void {
    this.portFolioForm = this.fb.group({
      name: ['',[Validators.required]],
      jobTitle: ['', Validators.required],
      about: ['', [Validators.required]],
      experience: ['', Validators.required],
      skills: ['', Validators.required],
      // image: ['', Validators.required]
    })
  }

  get form(){
    return this.portFolioForm.controls;
  }

  logout(){
    //clear user data in local storage
    this.uerService.logout();
    this.router.navigate(['/login'])
  }


  // onFileChange(event:Event){
  //   const input = event.target as HTMLInputElement
  //   const file = input.files?.[0]
  //   if(file){
  //     this.selectedFile = file;
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imagePreview = reader.result;
  //     };
  //     reader.readAsDataURL(file);

  //   }
  // }

  onSubmit(){
    if(this.portFolioForm.valid){
      const formData = new FormData();
      formData.append('name', this.portFolioForm.get('name')?.value);
      formData.append('jobTitle', this.portFolioForm.get('jobTitle')?.value);
      formData.append('about', this.portFolioForm.get('about')?.value);
      formData.append('experience', this.portFolioForm.get('experience')?.value);
      formData.append('skills', this.portFolioForm.get('skills')?.value);
      // if(this.selectedFile){
      //   formData.append('image', this.selectedFile, this.selectedFile.name);
      // }
      const skills = formData.get('skills') as string;
      const skillsArray = skills ? skills.split(',').map(skill => skill.trim()) : [];

      const portfolio:PortFolio = {
        name: formData.get('name') as string,
        jobTitle: formData.get('jobTitle') as string,
        about: formData.get('about') as string,
        experience: formData.get('experience') as string,
        skills: skillsArray, // assuming skills is a string array
        // url: ''
      };

      if(this.editMode && this.currentPortfolioId){
        portfolio.id = this.currentPortfolioId;
        this.uerService.updatePortFolioItem(portfolio).subscribe(response =>{
          console.log("port folio successfully updated...", response);
          this.resetForm();
        })

      }
      else{
        this.uerService.AddPortFolio(portfolio).subscribe(Response =>{
          console.log("port folio item added successfully", Response);
          this.resetForm();
        })

      }

    }

  }


  onEdit(portFolio:PortFolio){
    this.editMode = true;
    this.currentPortfolioId = portFolio.id!;
    this.portFolioForm.patchValue({
      name:portFolio.name,
      jobTitle:portFolio.jobTitle,
      about:portFolio.about,
      experience:portFolio.experience,
      skills:portFolio.skills.join(', ')
    })

  }


  getProfileDetails(){
    this.uerService.getPortFolioDetails().subscribe(result =>{
      this.profileDetails = result
    })

  }
  resetForm(){
    this.portFolioForm.reset();
    this.editMode = false;
    this.currentPortfolioId = null;
    this.getProfileDetails(); // refresh after edit mode.
  }

  onEditCancel(){
    this.resetForm();
  }

  deletePortFolioItem(id:string | undefined){
    this.uerService.deletePortFolioItem(id).subscribe(Response => {
      console.log("profile to be deleted");
      this.getProfileDetails();
    })
  }


}
