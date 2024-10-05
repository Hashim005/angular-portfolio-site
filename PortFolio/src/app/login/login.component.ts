import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  errorMessage: string | null = null;

  constructor(private userService:UserService, private router:Router, private fb:FormBuilder ){
    this.loginForm =this.fb.group({
      email:['hashim@gmail.com', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password:['1234', [Validators.required, Validators.minLength(4)]]

    })

  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;

    this.userService.loginUser(email, password).subscribe(users => {
      if (users.length > 0) {
        const user = users[0];
        if (user.role === 'admin') {
          this.userService.setCurrentUser(user);
          this.router.navigate(['/admin/admin-home']);
        } else {
          this.errorMessage = 'Unauthorized access';
          this.userService.clearCurrentUser();
        }
      } else {
        this.errorMessage = 'Invalid email or password';
        this.userService.clearCurrentUser();
      }
    }, error => {
      console.error('Login error:', error);
      this.errorMessage = 'An error occurred during login';
      this.userService.clearCurrentUser();
    });
  }


  cancel(){
    this.userService.logout();
    this.router.navigate(['/home'])
  }

}
