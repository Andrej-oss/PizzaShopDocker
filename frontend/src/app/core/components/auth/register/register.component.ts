import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators as v} from '@angular/forms';
import {regex} from '../../../constants';
import {AuthService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [v.email, v.required]),
      password: new FormControl('', v.pattern(regex.password)),
      profile: new FormGroup({
        name: new FormControl('', [v.required, v.pattern(regex.name)]),
        surname: new FormControl('', [v.required, v.pattern(regex.name)]),
        age: new FormControl('', [v.required, v.min(1), v.max(150)])
      })
    });
  }

  register(form: FormGroup): void {
    this.authService.register(form.getRawValue()).subscribe(() => {
      this.router.navigate(['auth', 'login']);
    }, error => console.log(error));
  }
}
