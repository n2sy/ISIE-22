import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'bi';

  myComment = '... isie ...';
  constructor() {}

  ngOnInit(): void {}

  showForm(f) {
    console.log(f.value);
  }

  resetForm(f: NgForm) {
    f.reset();
  }

  randomPwd(f: NgForm) {
    f.setValue({
      login: '',
      pwd: 'aasassaasas',
      section: '',
      comment: '',
    });
  }
  randomPwdII(f: NgForm) {
    f.form.patchValue({
      pwd: 'farah2022',
    });
  }
}
