import { Component } from '@angular/core';
import { DefaultPipe } from './default.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDirectivePipe';
  numbers = [1, 2, 3];
  data:string='Kritika';
  salary:number=15000;
  date:string='12/04/1989';
  dob=new Date(1986,5,2);
  work:string='SOFTWARE DEVELOPMENT';
  // imageUrl: string = 'http://tineye.com/images/widgets/mona.jpg';
  imageUrl: string = '';
  employees:any=[
    {code:'001',name:'Kritika',gender:'female',salary:50000},
    {code:'002',name:'Ashish',gender:'male',salary:50000}
  ]
}
