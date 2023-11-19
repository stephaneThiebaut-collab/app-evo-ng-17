import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, LoaderComponent, HttpClientModule]
})
export class AppComponent {

  title = 'evolutif-app';
}
