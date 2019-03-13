import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-tab',
  templateUrl: './sub-tabs.page.html',
  styleUrls: ['./sub-tabs.page.scss'],
})
export class SubTabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(link: String) {
    const url = this.router.url.split('/');

    if (url.length >= 4) {
      url.pop();
    }
    this.router.navigate([`${url.join('/')}/${link}`]);
  }

}
