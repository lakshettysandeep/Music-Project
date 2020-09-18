import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getArtist(query,typeofsearch){
    return this.http.
    get(`http://ws.audioscrobbler.com/2.0/?method=artist.${typeofsearch}&artist=${query}&api_key=2596941a3aefc221b5f9c647524f41ef&format=json`);
  }

  getrecommendations(){
    return this.http.
    get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=2596941a3aefc221b5f9c647524f41ef&format=json`);
  }

  getcountryspecial(query){
    return this.http.
    get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${query}&api_key=2596941a3aefc221b5f9c647524f41ef&format=json`);
  }
}
