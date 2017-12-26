import { RequestMethod } from '@angular/http'

export interface IBaseRequestOps{
     url:string;
     urlParams:any;
     queryParams:any;
     body:any;
     method:string;
}

 enum ReqMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Options = 'OPTION',
    Head = 'HEAD',
    Patch = 'PATCH',
}


 class BaseRequestOps implements IBaseRequestOps {
     url:string;
     urlParams:any;
     queryParams:any;
     body:any;
     method:string
    constructor(_url:string,_method,_urlParams?,_queryParams?,_body?,){
        this.url= _url;
        this.urlParams = _urlParams;
        this.queryParams = _queryParams;
        this.body = _body;
        this.method = _method
    };  
}

class CreateGET extends BaseRequestOps{
       constructor( url:string, urlParams?, queryParams? ) {
           super(url,ReqMethod.Get,urlParams,queryParams);
       }
 } 

 class CreateUpdate extends BaseRequestOps{
       constructor( url:string,method:ReqMethod,urlParams?, queryParams?,body? ) {
           super(url,method,urlParams,queryParams,body);
       }
 } 

export class URLCreater{
    constructor(private url:string){

    };

   public get(urlParams,queryParams):any{
    return new CreateGET(this.url,urlParams,queryParams);
   }

   public post(urlParams,queryParams,body):any{
       let method = ReqMethod.Post;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

   public put(urlParams,queryParams,body):any{
        let method = ReqMethod.Put;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

   public delete(urlParams,queryParams,body):any{
       let method = ReqMethod.Delete;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

}