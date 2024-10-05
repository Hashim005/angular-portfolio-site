import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IncreaseFontSizeDirective } from '../directives/increase-font-size.directive';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    IncreaseFontSizeDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgbModule,
    CommonModule,
    NgbNavModule,
    RouterLink,
    RouterOutlet,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,




  ]
})
export class HomeModule { }
