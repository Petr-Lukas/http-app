import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AppError } from 'common/app-error';
import { NotFndError } from 'common/not-found-error';
import { ServerDownError } from 'common/server-down-error';
import { PostService } from 'services/post.service';



@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})

export class HttpRequestComponent implements OnInit {
   // posts:any[] =[]
   posts:any
   
   
    constructor(private service:PostService)  {
      
}

ngOnInit(): void {
  this.service.getAll().subscribe
  (
    {next:(res:any)=> {
      this.posts=res
      console.log(res) 
     },
     error:(error:AppError)=>{
      if(error instanceof ServerDownError) {
          alert ('server down')
          console.log(error)
      }
      else {
        throw (error)
    
      }
    }
    }
    
    )

}


 postData (input:HTMLInputElement) {
    let data = {title:input.value}
    this.service.create(data).subscribe((res:any)=>{
      console.log(res)
      this.posts.splice (0,0,res)
      input.value = ''
    })
 }

 updateData (post:any,index:number) {
  post.isRed =true
  this.posts.splice(index,1,post)
   this.service.update(post).subscribe( (res:any)=> {   
     // post.isRed =true
     // this.posts.splice(index,1,post)
      console.log(res)
   },(err:AppError) =>{
      console.log('trying delete ..')
      // delete post['isRed']    
   })
 }

 
 deleteData (id:number,index:number) {
  console.log ('delete data:',id)
  this.service.delete(id).subscribe(res=>{
     
    // if ((res as any).isRed) post.isRed =true
    console.log(res)
    //if (res.ok && res.status==200) 
     this.posts.splice(index,1)
  },(error:AppError)=>{
    if (error instanceof  NotFndError ) {
      alert ('already deletedpost not found ')
      console.log(error)
    } else {
   throw (error)
    }
  })
}

}
