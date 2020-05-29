import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  title = "star-angular";
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }


  //public results:any;// กำหนดตัวแปร เพื่อรับค่า

  // Inject HttpClient มาใช้ใน component หรือ service.
  //constructor(private http:HttpClient) { }

  constructor( ) { }
  

  

  ngOnInit() {

    
  }

  // ngOnInit() {
  // ทำการเรียกใช้ HTTP request ผ่าน get() method 
  // ซึ่งจะได้ข้อมูลกลับมาในรูปแบบ Observable เราต้อง subscibe ตัว observer จึงจะทำงาน
  // พอรอค่าที่จะถูกส่งกลับมาแล้วทำงาน
  //this.http.get('/assets/data/data2.json').subscribe(data => {
  // อ่านค่า result จาก JSON response ที่ส่งออกมา
  // this.results = data;
  //});    
  // }




}

