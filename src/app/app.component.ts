import { Component, OnInit } from '@angular/core';

import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ampfunc';

  constructor(
    private api: APIService
  ) { }

  ngOnInit(): void {
    // this.api.CreateBlog({ id: '123', name: 'first blog' }).then(
    //   res => {
    //     console.log(res);
    //   }
    // ).catch(
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.api.Echo('is mac').then(e => console.log( e ));

    // this.api.CreateBlog
  }

}
