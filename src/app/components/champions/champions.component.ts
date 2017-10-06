import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Champion } from '../../interfaces/champion/champion';
import { ChampionService } from '../../services/champions.service';

@Component({
	providers: [ChampionService],
  	selector: 'the-heroes',
  	styleUrls: ['./champions.component.css'],
  	templateUrl: './champions.component.html',
})

export class ChampionsComponent implements OnInit {
	
	champions: Champion[];
	selectedChampion: Champion;

	constructor(
		private championService: ChampionService,
		private router: Router
	){}

	ngOnInit(){
		this.getChampions();
	}

	getChampions(){
		this.championService.getChampions().then(
			(champions) => {
				this.champions = champions
			}
		);
	}

	onSelect(champion: Champion){
		this.selectedChampion = champion;
		console.log(this.selectedChampion);
	}

	goToDetail(){
		this.router.navigate(['/detail', this.selectedChampion.id]);
	}
}