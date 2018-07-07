import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NewCmpComponent} from "./new-cmp/new-cmp.component";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NewCmpComponent
      ],
      imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        HttpClientModule,
        AppRoutingModule,
        // RouterModule.forRoot([
        //   {
        //     path: 'new-cmp',
        //     component: NewCmpComponent
        //   }
        // ])
      ]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-dream-app!');
  // }));
});
