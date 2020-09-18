import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistComponent } from './artist/artist.component';
import { CountryspecialComponent } from './countryspecial/countryspecial.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';

const routes: Routes = [
  { path: '', component: ArtistComponent },
  { path : 'artist-details', component : ArtistDetailsComponent},
  { path : 'recomendations' , component : RecomendationsComponent},
  { path : 'countryspecial' , component : CountryspecialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArtistComponent,ArtistDetailsComponent,RecomendationsComponent,CountryspecialComponent]
