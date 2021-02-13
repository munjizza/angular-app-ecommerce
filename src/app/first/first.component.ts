import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  ngOnInit(): void {
  }

  title = "This is First title";
  mailList;

  constructor(service: EmailService) {
    this.mailList = service.getMail();
  }

}
