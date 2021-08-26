import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onSubmit(form: any) {
    console.log('you submitted value: ', form);
  }

  userName: string;

  log(val) {
    console.log(val);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
