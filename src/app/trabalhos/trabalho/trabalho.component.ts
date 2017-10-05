import { Component, OnInit } from '@angular/core';
import {TrabalhoService} from './trabalho.service';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {

  trabalhos;
  constructor(private _trabalhoService: TrabalhoService) { }

  ngOnInit() {
    this.trabalhos = this._trabalhoService.getTrabalhos();
  }
}
