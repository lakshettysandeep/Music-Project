import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  recommend:Array<Object>=[];
  tracks:Array<Object>=[];

  ngOnInit(): void {
    this.service.getrecommendations().subscribe(data =>{

        console.log(typeof(data));
        this.recommend=data['tracks'];
        console.log(this.recommend+"recom");
        this.tracks=this.recommend['track'];
        console.log(this.tracks);
      
    })
  }

  

}
