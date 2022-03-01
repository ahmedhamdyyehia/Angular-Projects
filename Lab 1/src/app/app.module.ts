import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplteRefreanceComponent } from './templte-refreance/templte-refreance.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { FormsModule } from '@angular/forms';
import { SDirectiveComponent } from './sdirective/sdirective.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipePercentComponent } from './pipes/pipe-percent/pipe-percent.component';
import { SquarePipe } from './square.pipe';
import { PercentPipe } from './percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    EventBindingComponent,
    TemplteRefreanceComponent,
    TwoWayBindComponent,
    SDirectiveComponent,
    SwitchComponent,
    ForComponent,
    PipesComponent,
    PipePercentComponent,
    SquarePipe,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
