import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // let appComponent: AppComponent;
  let fixture, component;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       AppComponent
  //     ],
  //   });
  //   appComponent = TestBed.get(AppComponent);
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  // it(`should have as title new 'app'`, async(() => {
  //   const _appComponent = new AppComponent();
  //   expect(_appComponent.title).toEqual('app');
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   expect(appComponent.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
