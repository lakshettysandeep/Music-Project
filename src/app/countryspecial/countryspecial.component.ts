import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-countryspecial',
  templateUrl: './countryspecial.component.html',
  styleUrls: ['./countryspecial.component.css']
})
export class CountryspecialComponent implements OnInit {
query:string;
head:string = "Enjoy the Country's Special";
  constructor( private service :ApiserviceService) { }

  ngOnInit(): void {
  }

  condition:boolean;
  recommend:Array<Object>=[];
  tracks:Array<Object>=[];

  getcountryspcl(){
    this.condition = true;
    this.service.getcountryspecial(this.query).subscribe(data =>{

      console.log(typeof(data));
      this.recommend=data['tracks'];
      this.tracks=this.recommend['track'];
      console.log(this.tracks);
    });
  }

}
