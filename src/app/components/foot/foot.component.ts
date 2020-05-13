import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $ (document).ready (function () {
      var menu = $ ('.menu');
      var hamburger = $ ('.hamburger');
      var line = $ ('.line');
      var menuopen;
    
      function openMenu () {
        menu.css ('left', '0px');
        line.css ('background', '#fff');
        menuopen = true;
      }
      function closeMenu () {
        menu.css ('left', '-320px');
        line.css ('background', '#bcad90');
        menuopen = false;
      }
      function toggleMenu () {
        if (menuopen) {
          closeMenu ();
        } else {
          openMenu ();
        }
      }
      hamburger.on ({
        mouseenter: function () {
          openMenu ();
        },
      });
      menu.on ({
        mouseleave: function () {
          closeMenu ();
        },
      });
      hamburger.on ({
        click: function () {
          toggleMenu ();
        },
      });
    });
  }

}
