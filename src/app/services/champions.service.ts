import { Injectable } from '@angular/core';

import { Champion } from '../interfaces/champion/champion';
import { CHAMPIONROOST } from '../mocks/mock-heroes';

@Injectable()
export class ChampionService {
	getChampions(): Promise<Champion[]>{
		return Promise.resolve(CHAMPIONROOST);
	}
	getChampionsSlow(): Promise<Champion[]>{
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getChampions()), 2000);
		});
	}
	getChampion(id: number): Promise<Champion>{
		return this.getChampions()
		.then( (champions) => {
			return champions.find(champion => champion.id === id);
		});
	}
}