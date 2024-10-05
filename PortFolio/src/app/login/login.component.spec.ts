import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { Users } from '../users';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  const mockUser: Users = {
    role: 'admin',
    email: 'hashim@gmail.com',
    password: '1234',
    username: 'hashim123',  // Assuming 'username' is required
    phone: '1234567890'     // Assuming 'phone' is required
  };

  beforeEach(async () => {
    userService = jasmine.createSpyObj('UserService', ['loginUser', 'setCurrentUser', 'clearCurrentUser', 'logout']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        { provide: UserService, useValue: userService },
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
