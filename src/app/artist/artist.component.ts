import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  query:string;

names:Array<Object>=[];
objectofresult:Array<Object>=[];
objectofartistmatches=new Set();



  ngOnInit(): void {
  }

  searchartist(){
    this.service.getArtist(this.query,'search').subscribe(data => {
        this.names=data['results'];
        this.objectofresult=this.names['artistmatches'];
        this.objectofartistmatches.add(this.objectofresult);
   
    });
  }

}
