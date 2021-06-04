import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorAvailableService } from './services/color-available.service';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ColorAvailableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
