import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {combineLatest} from   'rxjs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:any=''
  order:any =''
  page:any= ''
  constructor (private router:Router){}

  onClick(): void {
    this.router.navigate(['/followers',{page:1,order:'newvest'}])
   
    
  }

}
