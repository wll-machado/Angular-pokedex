import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {

  @Input()
  public pokemonId: any = null;

  public pokebola : string = 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif';
  
  constructor() { }

  ngOnInit(): void {
    
  }
 
 
}
