import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  userNameForm: FormGroup;

  log(val) {
    console.log(val);
  }
  constructor(private formBuilder: FormBuilder) {
    this.userNameForm = formBuilder.group({
      'userName' : [null]
    });
   }

  ngOnInit(): void {
  }

}
