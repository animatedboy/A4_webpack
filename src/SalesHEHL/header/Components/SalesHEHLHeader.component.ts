import { Component,OnInit } from '@angular/core';
import {HeaderComponent} from '../../../core/header/Components/header.component';
import {LoginService} from '../../../core/auth/Services/login.service'
import {HeaderService} from '../../../core/header/Services/header.service';

@Component({
  moduleId:module.id,
  selector: 'salesHEHLHeader',
  templateUrl:"../Templates/header.html",
  styleUrls:["../../../core/header/Templates/header.css"]
})

export class SalesHEHLHeaderComponent extends HeaderComponent{
    constructor(authService:LoginService,headerService:HeaderService){
        super(authService,headerService)
    }
    
    menuItems:Array<Object> = [{
                menuId: 1,
                menuName: 'Loan Application',
                stateUrl: '',
                subMenus: [{
                    menuId: 10,
                    menuName: 'Create New',
                    stateUrl: `/sales_HEHL/loanApplication`,
                    activityID: ['HL_CREATE_NEW_LOAN_APPLICATION', 'HE_CREATE_NEW_LOAN_APPLICATION']
                }, {
                    menuId: 11,
                    menuName: 'My Application',
                    stateUrl: `/sales_HEHL/myApplications`,
                    activityID: ['HE_VIEW_MY_APPLICATIONS', 'HL_VIEW_MY_APPLICATIONS']
                }, {
                    menuId: 12,
                    menuName: 'Status of Application',
                    stateUrl: 'sales_HEHL.appLoansSummary',
                    activityID: ['HE_VIEW_STATUS_OF_APPLICATION', 'HL_VIEW_STATUS_OF_APPLICATION']
                }, {
                    menuId: 13,
                    menuName: 'Waivers/Deviations',
                    stateUrl: 'sales_HEHL.myApplications.waivers',
                    activityID: ['HL_VIEW_MY_WAIVER_DEVIATIONS', 'HE_VIEW_MY_WAIVER_DEVIATIONS']
                }, {
                    menuId: 14,
                    menuName: 'Re-Assign Application',
                    stateUrl: 'sales_HEHL.reAssignApplications.main',
                    activityID: ['HE_REASSIGN_BRANCH_SALES_MANAGEMENT', 'HL_REASSIGN_BRANCH_SALES_MANAGEMENT', 'HE_REASSIGN_BRANCH_CREDIT_MANAGEMENT', 'HL_REASSIGN_BRANCH_CREDIT_MANAGEMENT']
                },{
                    menuId: 14,
                    menuName: 'High Value Loan Applications',
                    stateUrl: 'sales_HEHL.myApplications.highvalueapp',
                    activityID: ['HE_VIEW_MY_APPLICATIONS', 'HL_VIEW_MY_APPLICATIONS']
                }]
            }]
}