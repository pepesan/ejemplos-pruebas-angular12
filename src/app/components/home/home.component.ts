import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo = "Hola";
  public otrotitulo: string = "Adios";

  constructor() { }

  ngOnInit(): void {
  }

}
