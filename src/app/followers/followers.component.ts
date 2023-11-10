import { combineLatest,map,switchMap,tap ,concatAll} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { FollowerService } from 'services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers:any
   id:any
   order:any
   page:any
   
    constructor(private service:FollowerService,private route:ActivatedRoute)  {
       }

       ngOnInit(){  
        let ob =  
        combineLatest (
          [  this.route.paramMap,
             this.route.queryParamMap
    
         ]).pipe(
            tap ( (combined) =>{
              this.id = combined[0].get('username')
              this.order =combined[1].get('order')
              this.page = combined[1].get('page')
              console.log(this.id,this.page,this.order)
             })
            ). pipe ( 
              switchMap ( a => {return this.service.getAll()})
            )
         
         ob.subscribe ((foll:any)=>{
          
          
            this.followers = foll
             console.log(foll)
        
         // this.followers = foll
         // console.log(foll)
       })
       
         
         
         /*
         subscribe (parms => {
             this.id = parms[0].get('username')
             this.order =parms[1].get('order')
             this.page =parms[1].get('page')
             console.log(this.id,this.page,this.order)
            
             this.service.getAll().subscribe ((foll:any)=>{
              this.followers = foll
              console.log(foll)
           })
         })*/
       
          
       }
    }
   
  
