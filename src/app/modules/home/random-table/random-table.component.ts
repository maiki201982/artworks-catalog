import { Component } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interfaces';
import { players } from 'src/app/mocks/players.mocks';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss']
})
export class RandomTableComponent {

  players: Player[] = players;

}
