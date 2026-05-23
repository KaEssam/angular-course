import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CustomPipePipe } from '../custom-pipe-pipe';

@Component({
  selector: 'app-pipe',
  imports: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    UpperCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    AsyncPipe,
    CustomPipePipe,
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  today = new Date();
  price = 1234.5678;
  pi = 3.1415926;
  ratio = 0.4784;

  name = 'karim essam';
  bio = 'ddaskdjalksdjas ddjaksdh lasd dd;aklshd a ;jd a;sd ja';

  user = {
    name: 'karim',
    email: 'karim@mail.com',
  };

  test = interval(1000);
}
