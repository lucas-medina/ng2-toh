import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'champions',
		component: ChampionsComponent
	},
	{
		path: 'detail/:id',
		component: ChampionDetailComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}