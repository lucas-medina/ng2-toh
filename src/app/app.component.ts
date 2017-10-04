import { Component } from '@angular/core';
import { Champion } from '../components/champion/champion';

const HEROROOST: Champion[] = [
	{ id: 10, name: 'Annie' },
	{ id: 11, name: 'Blitzcrank' },
	{ id: 12, name: 'Twisted Fate' },
	{ id: 13, name: 'Tryndamere' },
	{ id: 14, name: 'Taric' },
	{ id: 15, name: 'Zed' },
	{ id: 16, name: 'Jhin' },
	{ id: 17, name: 'Fiora' }
];

@Component({
  	selector: 'my-app',
  	styles: [`
	  	.wrapper {
	  		display: flex;
	  		justify-content: flex-start;	
	  	}
		.selected {
		    background-color: #CFD8DC !important;
		    color: white;
    	}
	  	.champions {
		    margin: 0 3em 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
    	}
	  	.champions li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
    	}
	  	.champions li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
    	}
	  	.champions li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
    	}
	  	.champions .text {
		    position: relative;
		    top: -3px;
    	}
	  	.champions .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
    	}
  	`],
  	template: `
  		<h1>{{title}}</h1>
  		<div class="wrapper">
			<ul class="champions">
				<li [class.selected]="champ === selectedChampion"
				*ngFor="let champ of champions" 
				(click)="onSelect(champ)" >
						<span class="badge">{{champ.id}}</span> {{champ.name}}
				</li>
			</ul>
			<champion-detail [champion]="selectedChampion"></champion-detail>
  		</div>
  		`,
})

export class AppComponent  {
	
	title = "Tour of Champions";
	champions = HEROROOST;

	champion : Champion = {
		id: 1,
		name: 'Aatrox'
	}

	selectedChampion: Champion;

	onSelect(champion: Champion){
		this.selectedChampion = champion;
		console.log(this.selectedChampion);
	}
}