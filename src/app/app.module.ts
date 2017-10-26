import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BootstrapLayoutComponent } from 'app/layouts/bootstrap-layout.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { AppRoutingModule } from './app.routing.module';
import { HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { BusyModule } from 'angular2-busy';
import { ColorChangerDirective } from './color-changer.directive';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BusyModule,
  ],
  declarations: [
    ColorChangerDirective,
    AppComponent,
    BootstrapLayoutComponent,
    HelloworldComponent,
    HomePageComponent,
    ElementPageComponent
  ],
  providers: [{
    provide: PathLocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
