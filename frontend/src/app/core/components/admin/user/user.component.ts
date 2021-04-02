import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFullUser} from '../../../interfaces';
import {URL} from '../../../../shared/config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: IFullUser[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<IFullUser[]>(URL.usersURL).subscribe(value => this.users = value);
  }

}
