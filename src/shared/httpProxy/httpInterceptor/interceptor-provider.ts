import { FactoryProvider } from '@angular/core';
import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpProxy } from './httpProxy';

export function provideHttpProxy(interceptors:any[]):FactoryProvider {
	let deps:any[] = [
		XHRBackend,
		RequestOptions
	];

	interceptors = interceptors.map((interceptor:any) => {
		if(typeof interceptor == "function"){
			deps.push(interceptor);
			return {
				useValue: false,
				index: deps.length-1
			}
		}else{
			return {
				useValue: interceptor
			}
		}
	});

	return {
		provide: HttpProxy,
		useFactory: function(){
			let injectedServices = arguments;
			let xhrBackend:XHRBackend = injectedServices[0];
			let requestOptions:RequestOptions = injectedServices[1];

			let service = new HttpProxy(xhrBackend, requestOptions);
			interceptors.forEach((interceptor) => {
				if(interceptor.useValue){
					service.addInterceptor(interceptor.useValue);
				}else{
					let value = injectedServices[interceptor.index];
					service.addInterceptor(value);
				}
			});
			return service;
		},
		deps: deps,
		multi: false
	}
}
