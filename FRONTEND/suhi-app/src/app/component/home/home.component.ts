import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pathImage = environment.apiGetImages;
  @Input() box: Box = new Box();
}