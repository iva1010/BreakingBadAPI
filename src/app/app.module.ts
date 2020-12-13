import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { FilterStatusPipe } from './core/pipes/filter-status.pipe';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CharacterApiService} from './core/servises/character.service';
import {FormsModule} from '@angular/forms';
import { FilterNamePipe } from './core/pipes/filter-name.pipe';
import { FilterSeasonPipe } from './core/pipes/filter-season.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    QuotesComponent,
    FilterStatusPipe,
    FilterNamePipe,
    FilterSeasonPipe,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule

  ],
  providers: [CharacterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
