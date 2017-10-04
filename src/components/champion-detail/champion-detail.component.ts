import { Component, Input } from '@angular/core';
import { Champion } from '../champion/champion';


@Component({
	selector: 'champion-detail',
	template: `
		<div *ngIf="champion">
			<h2>See more about {{champion.name}}</h2>
	  		<div><label>Id: </label>{{champion.id}}</div>
	  		<div>
				<input type="text" [(ngModel)]="champion.name" placeholder="Which is the champion name?">
	  		</div>
		</div>
	`
})

export class ChampionDetailComponent {
	@Input() champion: Champion;
}