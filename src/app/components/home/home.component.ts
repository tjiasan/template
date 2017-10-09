import { Component, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent {  
  
  constructor (private apiService: ApiService) {};

  private response1;
  ngOnInit(){
    this.apiService.getResponse1().subscribe(res =>{
        console.log(res);
    });
  } 
}