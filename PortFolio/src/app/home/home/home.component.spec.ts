import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from '../../user.service';
 // Adjust the import path as necessary

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: jasmine.SpyObj<UserService>;

  const mockPortFolio = [
    {
      id: '1',
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      about: 'An experienced software engineer...',
      experience: '5 years in software development',
      skills: ['JavaScript', 'Angular', 'TypeScript'], // Correct type
      url: 'https://example.com'
    },
  ];

  const mockContacts = [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890', message: 'Hello' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321', message: 'Hi' }
  ];

  beforeEach(async () => {
    // Create a spy object for UserService with specific methods
    userService = jasmine.createSpyObj('UserService', ['getPortFolioDetails', 'getContactDetails']);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: UserService, useValue: userService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    // Mock the return values of the spied methods
    userService.getPortFolioDetails.and.returnValue(of(mockPortFolio));
    userService.getContactDetails.and.returnValue(of(mockContacts));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get portfolio details on initialization', () => {
    fixture.detectChanges(); // Trigger ngOnInit
    expect(userService.getPortFolioDetails).toHaveBeenCalled();
    expect(component.profileDetails).toEqual(mockPortFolio);
  });

  it('should get contact details on initialization', () => {
    fixture.detectChanges(); // Trigger ngOnInit
    expect(userService.getContactDetails).toHaveBeenCalled();
    expect(component.contactDetails).toEqual(mockContacts);
  });
});
