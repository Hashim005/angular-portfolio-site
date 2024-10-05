import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortFolio';

  isLoading!: Subject<boolean>;


  constructor(private loaderService:LoaderService){
    this.isLoading = this.loaderService.isLoading

  }


}
