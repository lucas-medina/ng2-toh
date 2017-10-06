import { Component, OnInit } from '@angular/core';

import { Champion } from '../../interfaces/champion/champion';
import { ChampionService } from '../../services/champions.service';

@Component({
	selector: 'app-dashboard',
	styles: [],
	templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	
	champions: Champion[];

	constructor(
		private championService: ChampionService
	){}

	ngOnInit(){
		this.championService.getChampions().then(
			(heroes) => {
				let heroSelection = [];
				for (let i = 0; i < 4; i++){
					let randomIndex = Math.floor(Math.random() * heroes.length);
					heroSelection.push(heroes[randomIndex]);
					heroes.splice(randomIndex, 1);
				}

				this.champions = heroSelection;
				console.log(this.champions);
			}
		);
	}
}