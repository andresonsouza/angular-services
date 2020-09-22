import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  userComment$: Observable<User[]>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.userComment$ = this.mainService.getComments();
  }

}
