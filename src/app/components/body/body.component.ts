import { Component } from '@angular/core';
import { Staff } from 'src/app/components/body/staff';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  staffs = [
    new Staff(1,'John Smoke','IT Support',27),
    new Staff(2,'Linda Pink','Accounting',30),
    new Staff(3,'Lisa Mour','Marketing',33),
    new Staff(4,'Lisa Mour','Marketing',33),
    new Staff(5,'Lisa Mour','Marketing',33),
    new Staff(6,'Lisa Mour','Marketing',33),
    new Staff(7,'Lisa Mour','Marketing',33),
    new Staff(8,'Lisa Mour','Marketing',33),
    new Staff(9,'Lisa Mour','Marketing',33),
    new Staff(10,'Lisa Mour','Marketing',33)
]; 

  staff = new Staff(1,'',''); // ให้เป็นค่าว่างไป



  

}
