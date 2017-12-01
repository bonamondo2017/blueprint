import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//Crawling part
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
//Crawling part 2
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.css']
})
@Injectable()
export class RadioTestComponent implements OnInit {
  SearchResult: any;
  SearchUrl: any = '';
  crawlerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.crawlerForm = new FormGroup({
      'search_input': new FormControl(null)      
    })
  }
  
  onCrawlerFormSubmit = () => {
    this.SearchResult = this.crawlerForm.get('search_input').value;
  }

    

}