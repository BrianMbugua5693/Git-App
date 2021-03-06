import { MineService } from './services/mine.service';
import { ProfileService } from './services/profile.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SearchComponent } from './search/search.component';

import { MineComponent } from './mine/mine.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    ProfileDataComponent,
    ProfileCardComponent,
    SearchComponent,
    MineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService, MineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
