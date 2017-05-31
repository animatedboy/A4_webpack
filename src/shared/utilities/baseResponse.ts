export interface IBaseResponse{
     status:string;
     message:any;
     data:Array<Object>;
     errorData:any;
     meta:any;
}

export class BaseResponse  implements IBaseResponse{
    public status:string;
    public message:any;
    public data:Array<Object>;
    public errorData:any;
    public meta:any
    constructor(){

    }
}