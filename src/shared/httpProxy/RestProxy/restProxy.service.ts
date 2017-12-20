import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { DialogsService } from '../../dialogService/Services/dialog.service';
import {HttpHeaders,HttpRequest,HttpResponse,HttpClient,HttpParams,HttpResponseBase} from '@angular/common/http';
import {URLSearchParams,ResponseContentType,RequestMethod} from '@angular/http';
import { IBaseRequestOps,ResponseStatus,BaseResponse,ReqMethod } from '../../../shared/utilities/utility';

@Injectable()
export class RestProxy {

    constructor(private _http:HttpClient,private dialogService:DialogsService) {

    }

    private responseTransformer(response:Response):BaseResponse{
        let transformedResponse = new BaseResponse();
        let result = response.json();

        transformedResponse.status = response.ok?ResponseStatus.Success:ResponseStatus.Failure;
        transformedResponse.data= response.ok?result:[];
        let leapMetaData = response.ok?response.headers.get("LEAP_MetaData"):"";
        if(leapMetaData && leapMetaData !== null && leapMetaData !== "undefined"){
           transformedResponse.meta = JSON.parse(leapMetaData);
           if(transformedResponse.meta.message){
               transformedResponse.message = transformedResponse.meta.message;
           }
        }else{
          transformedResponse.message = leapMetaData;
          transformedResponse.meta = leapMetaData;
        }
        

        if(response.status === 401){
           transformedResponse.errorData =!response.ok && result?result:[];
           transformedResponse.message = !response.ok && result?result:"";
        }else if(!response.ok){
           transformedResponse.errorData = result.errors?result.errors:[]; 
           transformedResponse.message = result.errors?result.errors[0].message:"";
        }

        return transformedResponse;
    }

    private DefaultSuccessHandler(response:Response){
        return Observable.of({status:"failure"});
    }

    private DefaultErrorHandler(errResult:BaseResponse):Observable<any>{
      
            if(errResult.message && errResult.status === ResponseStatus.Failure){
            return this.dialogService.alert("Warning",errResult.message.message).flatMap((result)=> {
                  return Observable.of(errResult);
            });
           }
        
        return Observable.of({status:"failure"});
    }

    private setUrlParams (params):HttpParams{
        let searchParams = new HttpParams();
         for(let key in params){
            searchParams.set(key,params[key])
         } 
         return searchParams;   
    }

    private setHeaders = function(headers?):HttpHeaders{
       let reqHeaders = new HttpHeaders();
         for(let key in headers){
            reqHeaders.set(key,headers[key])
         } 
         reqHeaders.append("Content-Type","application/json");
         return reqHeaders; 
    }

    private setRequestOptions(url:string,method:string,params?:HttpParams,headers?:HttpHeaders,body?:Object,responseType?:ResponseContentType):HttpRequest<any>{

        var requestOptions= new HttpRequest(method,url,{
            headers:headers,
            params:params,
            responseType:responseType?responseType:'json',
            body:body?body:null
        });
       

        return requestOptions;
    }

    private baseRequestMaker(URL:IBaseRequestOps):Promise<BaseResponse>{
        let searchParams = this.setUrlParams(URL.queryParams);
        var reqHeaders = this.setHeaders();
        let requestOptions = this.setRequestOptions(URL.url,URL.method,searchParams,reqHeaders,URL.body)
        return this._http.request(requestOptions).subscribe((response:HttpResponse<any>)=>{
             if (response.ok) {
               let successResult = this.responseTransformer(response)
               return Observable.of(successResult);
             }
        }).catch((response:Response)=>{
            let errResult = this.responseTransformer(response)
            return this.DefaultErrorHandler(errResult).flatMap((errResult) => {
                 return Observable.of(errResult);
            }); 
        })  .toPromise();
    }

    public getData (URL:IBaseRequestOps):Promise<BaseResponse>{
        return this.baseRequestMaker(URL);
    }

    public saveData(URL:IBaseRequestOps):Promise<BaseResponse>{
         return this.baseRequestMaker(URL);
    }


    public deleteData(){

    }

    

}