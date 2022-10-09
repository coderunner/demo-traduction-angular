import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';

// On en a besoin pour les pipes Angular
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoRootModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
