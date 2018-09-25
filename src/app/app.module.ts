import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { DashboardComponent, StarsService } from './dashboard';
import { AppRoutingBaseModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule,
    AppRoutingBaseModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  providers: [ StarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
