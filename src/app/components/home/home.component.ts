import { Component, OnInit } from '@angular/core';
import { Shopbycategory } from './shopbycategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jj =1
  jjs=10

  Shopbycategorys = [
    new Shopbycategory(1,'Johnaaaaaaaaassssss SmokeSmokeSmokeSmoke','https://thisiscoolads.files.wordpress.com/2013/06/b7fee-coca-cola-split-can-hed-2013.jpg?w=640&h=360'),
    new Shopbycategory(2,'Linda Pink','https://4.bp.blogspot.com/-FcwpXyPMkOY/W6DqNGLPapI/AAAAAAAAFHE/Acxd3pQMXVolN-9B7npYc3KMLHFS3PhEwCLcBGAs/s1600/%25E0%25B8%2594%25E0%25B8%25B2%25E0%25B8%25A7%25E0%25B8%2599%25E0%25B9%258C%25E0%25B9%2582%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%2594%2B%25282%2529.jpg'),
    new Shopbycategory(3,'Lisa Mour','https://sites.google.com/site/thesitesbykhonkrununoon/_/rsrc/1380472876576/-prawati-khwam-pen-ma-khxng-khxmphiwtexr/tb8062126036.jpg?height=282&width=320'),
    new Shopbycategory(4,'Lisa Mour','https://th-test-11.slatic.net/p/3/optimum-282-ptimam-282-khnaad-5-litr-phlitphanthkhcchadkhraabdam-aihmsamhrabetaa-baelaetaayaang-5074-50233801-5f7ccbe8201075bbcfcb516aedf85b72-catalog.jpg_340x340q80.jpg_.webp'),
    new Shopbycategory(5,'Lisa Mour','https://i5.walmartimages.com/dfw/4ff9c6c9-4cbc/k2-_2ab97629-81b8-4e75-9d4a-063b43021425.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff'),
    new Shopbycategory(6,'John Smoke','https://thisiscoolads.files.wordpress.com/2013/06/b7fee-coca-cola-split-can-hed-2013.jpg?w=640&h=360'),
    new Shopbycategory(1,'John Smoke','https://thisiscoolads.files.wordpress.com/2013/06/b7fee-coca-cola-split-can-hed-2013.jpg?w=640&h=360'),
    new Shopbycategory(2,'Linda Pink','https://4.bp.blogspot.com/-FcwpXyPMkOY/W6DqNGLPapI/AAAAAAAAFHE/Acxd3pQMXVolN-9B7npYc3KMLHFS3PhEwCLcBGAs/s1600/%25E0%25B8%2594%25E0%25B8%25B2%25E0%25B8%25A7%25E0%25B8%2599%25E0%25B9%258C%25E0%25B9%2582%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%2594%2B%25282%2529.jpg'),
    new Shopbycategory(3,'Lisa Mour','https://sites.google.com/site/thesitesbykhonkrununoon/_/rsrc/1380472876576/-prawati-khwam-pen-ma-khxng-khxmphiwtexr/tb8062126036.jpg?height=282&width=320'),
    new Shopbycategory(4,'Lisa Mour','https://th-test-11.slatic.net/p/3/optimum-282-ptimam-282-khnaad-5-litr-phlitphanthkhcchadkhraabdam-aihmsamhrabetaa-baelaetaayaang-5074-50233801-5f7ccbe8201075bbcfcb516aedf85b72-catalog.jpg_340x340q80.jpg_.webp'),
    new Shopbycategory(5,'Lisa Mour','https://i5.walmartimages.com/dfw/4ff9c6c9-4cbc/k2-_2ab97629-81b8-4e75-9d4a-063b43021425.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff'),
    new Shopbycategory(6,'John Smoke','https://thisiscoolads.files.wordpress.com/2013/06/b7fee-coca-cola-split-can-hed-2013.jpg?w=640&h=360'),
  ]; 

Shopbycategory = new Shopbycategory(1,'',''); // ให้เป็นค่าว่างไป

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
