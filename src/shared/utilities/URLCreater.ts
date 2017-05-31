import { RequestMethod } from '@angular/http'

export interface IBaseRequestOps{
     url:string;
     urlParams:any;
     queryParams:any;
     body:any;
     method:RequestMethod
}


 class BaseRequestOps implements IBaseRequestOps {
     url:string;
     urlParams:any;
     queryParams:any;
     body:any;
     method:RequestMethod
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
           super(url,RequestMethod.Get,urlParams,queryParams);
       }
 } 

 class CreateUpdate extends BaseRequestOps{
       constructor( url:string,method:RequestMethod,urlParams?, queryParams?,body? ) {
           super(url,method,urlParams,queryParams,body);
       }
 } 

export class URLCreater{
    constructor(private url:string){

    };

   public createGET(urlParams,queryParams):any{
    return new CreateGET(this.url,urlParams,queryParams);
   }

   public CreatePOST(urlParams,queryParams,body):any{
       let method = RequestMethod.Post;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

   public CreatePUT(urlParams,queryParams,body):any{
        let method = RequestMethod.Put;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

   public CreateDelete(urlParams,queryParams,body):any{
       let method = RequestMethod.Delete;
       return new CreateUpdate(this.url,method,urlParams,queryParams,body);
   }

}