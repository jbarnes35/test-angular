import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


// กำหนด interface ให้สอดคล้องกับข้อมูลที่ส่งมา
interface Articles {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 

  // ส่วนของตัวแปรไว้รับค่าข้อมูลที่ไปดึงมา
  public results: any;// กำหนดตัวแปร เพื่อรับค่า
  public urlSource: string = "https://jsonplaceholder.typicode.com";
  public highlightId: number; // สำหรับเก็บ id ที่เพิ่งเข้าดู

  //public results:any;// กำหนดตัวแปร เพื่อรับค่า

  // Inject HttpClient มาใช้ใน component หรือ service.
  //constructor(private http:HttpClient) { }

  // ส่วนจัดการเกี่ยวกับการแบ่งหน้า variable
  public iPage: number[] = [];
  public iPageStart: number = 1;
  public prevPage: number;
  public nextPage: number;
  public activePage: number;
  public totalItem: number = 100; // สมมติจำนวนรายการทั้งหมดเริ่มต้น หรือเป็น 0 ก็ได้
  public perPage: number = 50; // จำนวนรายการที่แสดงต่อหน้า
  public totalPage: number;
  public maxShowPage: number;
  public useShowPage: number = 5; // จำนวนปุ่มที่แสดง ใช้แค่ 5 ปุ่มตัวเลข
  public pointStart: number = 0; // ค่าส่วนนี้ใช้การกำหนดการแสดงข้อมูล
  public pointEnd: number; // ค่าส่วนนี้ใช้การกำหนดการแสดงข้อมูล

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  // ส่วนจัดการเกี่ยวกับการแบ่งหน้า
  changePage(page: number) {
    this.activePage = page;
    this.router.navigate(['/body'], { queryParams: { page: page } });
  }

  pagination() {
    if (this.activePage > this.useShowPage) {
      if (this.activePage + 2 <= this.totalPage) {
        this.iPageStart = this.activePage - 2;
        this.maxShowPage = this.activePage + 2;
      } else {
        if (this.activePage <= this.totalPage) {
          this.iPageStart = (this.totalPage + 1) - this.useShowPage;
          this.maxShowPage = (this.iPageStart - 1) + this.useShowPage;
        }
      }
      this.iPage = [];
      for (let i = this.iPageStart; i <= this.maxShowPage; i++) {
        this.iPage.push(i);
      }
    } else {
      this.iPageStart = 1;
      this.iPage = [];
      for (let i = this.iPageStart; i <= this.useShowPage; i++) {
        this.iPage.push(i);
      }
    }

  }

  // ส่วนจัดการเกี่ยวกับการแบ่งหน้า

  ngOnInit() {
    

    // ส่วนจัดการเกี่ยวกับการแบ่งหน้า
    this.activePage = 1;
    this.nextPage = 2;
    this.pointEnd = this.perPage * this.activePage;

    this.totalPage = Math.ceil(this.totalItem / this.perPage);
    if (this.totalPage > this.useShowPage) {
      this.useShowPage = 5;
    } else {
      this.useShowPage = this.totalPage;
    }

    for (let i = this.iPageStart; i <= this.useShowPage; i++) {
      this.iPage.push(i);
    }

    this.route
      .queryParams
      .subscribe((data: { page: any }) => {
        if (data != null && data.page != null) {
          this.activePage = +data.page;
          this.prevPage = this.activePage - 1;
          this.nextPage = this.activePage + 1;
          this.pointStart = (this.activePage - 1) * this.perPage;
          this.pointEnd = this.perPage * this.activePage;
          this.pagination();
        }
      });
    // ส่วนจัดการเกี่ยวกับการแบ่งหน้า
    // ส่วนของการดึงข้อมูลด้วย HttpClient get() method
    this.http.get<Articles[]>(this.urlSource + '/posts')
      .subscribe(
        data => {
          // กรณี resuponse success
          // เก็บจำนวนรายการทั้งหมด ไปคำนวณหน้าจำนวนหน้า
          this.totalItem = data.length;
          this.results = data;
        },
        (err: HttpErrorResponse) => {
          // กรณี error
          if (err.error instanceof Error) {
            // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
            console.log('An error occurred:', err.error.message);
          } else { // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error 
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );

    // ส่วนของการรับค่า paramMap ที่ส่งกลับมาจากหน้า รายละเอียด
    let params = this.route.snapshot.paramMap;
    if (params.has('id')) {
      // เก็บ id รายการที่เพิ่งเข้าไปดู ใส่เครื่องหมาย + ด้านหน้าเพื่อทำให็ 
      // string แปลงเป็นตัวแปร number
      this.highlightId = +params.get('id');
    }
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
