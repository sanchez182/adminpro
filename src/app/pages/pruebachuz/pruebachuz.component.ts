import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-pruebachuz',
  templateUrl: './pruebachuz.component.html',
  styles: []
})
export class PruebachuzComponent implements OnInit {

  hospital: Hospital;

  chuz: string;

  constructor() { 

    this.chuz = 'chuz lindo';
    this.hospital = new Hospital('asd', '', '');
  }
 
  hola() {
    console.log(    this.hospital.nombre);
  }
  ngOnInit() {
  }

}
