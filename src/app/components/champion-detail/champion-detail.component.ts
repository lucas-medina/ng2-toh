import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Champion } from '../../interfaces/champion/champion';
import { ChampionService } from '../../services/champions.service';

@Component({
	selector: 'champion-detail',
	templateUrl: './champion-detail.component.html'
})

export class ChampionDetailComponent implements OnInit {

	champion: Champion;

	constructor(
		private championService: ChampionService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.paramMap
      		.switchMap((params: ParamMap) => this.championService.getChampion(+params.get('id')))
      		.subscribe((champion) => this.champion = champion);
	}

	goBack(){
		this.location.back();
	}
}