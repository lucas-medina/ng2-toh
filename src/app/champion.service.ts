import { Injectable } from '@angular/core';

import { Champion } from '../components/champion/champion';
import { CHAMPIONROOST } from './mock-heroes';

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
}