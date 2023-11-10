import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
 // private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(http:HttpClient) 
  {
    super(http,'https://jsonplaceholder.typicode.com/posts' )
   }

  
  



}