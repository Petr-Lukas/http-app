
import { HttpClient,HttpResponse } from '@angular/common/http';
import { catchError,throwError,map,Observable}  from 'rxjs'
import { ServerDownError } from 'common/server-down-error';
import { AppError } from 'common/app-error';
import { NotFndError} from 'common/not-found-error';


export class DataService {
 // private url 
  
  constructor(private http:HttpClient,private url:string )
  { }

  getAll()  {
  return  this.http.get(this.url,{observe:'response'})
  .pipe (map(response => response.body))
  .pipe (catchError (this.handleErrors))
   
 
}

create(data:any) {
return this.http.post(this.url,data,{observe:'response'})
.pipe (map(response => response.body))
.pipe (catchError (this.handleErrors))
}

update(post:any) {
// return throwError (new NotFndError)
  return  this.http.patch(this.url +'/'+post.id,{isRed:true},{observe:'response'})
  .pipe (map(response => response.body))
  .pipe (catchError (this.handleErrors))
}

delete (id:number) {
  console.log('delete:',id)
  return this.http.delete(this.url +'/'+ id,{observe:'response'})
  .pipe (map(response => response.body))
  .pipe (catchError (this.handleErrors))
  
}

private handleErrors(error:HttpResponse<any>) {
   if (error.status === 404 ) 
     return throwError( new NotFndError )
   if (error.status == 0) 
   return throwError(new ServerDownError)
  
   return throwError (new AppError)

}
}