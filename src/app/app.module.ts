import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestderComponent } from './testder/testder.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FootComponent } from './components/foot/foot.component';
import { LeftbodyComponent } from './components/leftbody/leftbody.component';
import { HeadbodyComponent } from './components/headbody/headbody.component';
import { HomeComponent } from './components/home/home.component';
import { AllbodyComponent } from './components/allbody/allbody.component';

@NgModule({
  declarations: [
    AppComponent,
    TestderComponent,
    HeaderComponent,
    BodyComponent,
    FootComponent,
    LeftbodyComponent,
    HeadbodyComponent,
    HomeComponent,
    AllbodyComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
