import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatProgressBarModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProduceDetailComponent } from './produce-detail/produce-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProduceDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
