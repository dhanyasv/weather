import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './userService';

export class MockUserService {
  loggedIn : boolean = true;
  userName : string = 'dhanya';
}
describe('AppComponent', () => {
  let comp:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let userService:UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppComponent,
        { provide: UserService, useClass: MockUserService }
      ]
    }).compileComponents();
    comp = TestBed.inject(AppComponent);
     userService = TestBed.inject(UserService);
  });
 
  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as text 'Guest before login'`, () => {
     fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.weatherapp).toEqual('Guest');
  });
  it(`should have as text 'Hello Dhanya' after ngOnInit`, () => {
    comp.ngOnInit();
    expect(comp.weatherapp).toContain(userService.userName);
 });
 it('should ask user to log in if not logged in after ngOnInit', () => {
  userService.loggedIn = false;
  comp.ngOnInit();
  expect(comp.weatherapp).not.toContain(userService.userName);
  expect(comp.weatherapp).toContain('Guest');
});

  
});
