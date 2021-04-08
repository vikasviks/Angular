import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { AsyncSubjectComponent } from "./app/async-subject/async-subject.component";
import { AttributedirectiveComponent } from "./app/attributedirective/attributedirective.component";
import { BehaviourSubjectComponent } from "./app/behaviour-subject/behaviour-subject.component";
import { ErrorhandlerComponent } from "./app/errorhandler/errorhandler.component";
import { HomeComponent } from "./app/home/home.component";
import { LoginformComponent } from "./app/loginform/loginform.component";
import { ProductComponent } from "./app/product/product.component";
import { PurchaseComponent } from "./app/purchase/purchase.component";
import { ReplaySubjectComponent } from "./app/replay-subject/replay-subject.component";
import { RxjsdemoComponent } from "./app/rxjsdemo/rxjsdemo.component";
import { SharedataComponent } from "./app/sharedata/sharedata.component";
import { SubjectComponent } from "./app/subject/subject.component";
import { TshirtdatabindingComponent } from "./app/tshirtdatabinding/tshirtdatabinding.component";

const  routes:Routes=[
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'Tshirt',
        component:TshirtdatabindingComponent,
    },
    {
        path:'Products',
        component:ProductComponent
    },
    {
        path:'Purchase',
        component:PurchaseComponent,
    },
    {
        path:'Sharedata',
        component:SharedataComponent,
    },
    {
        path:'HandelError',
        component:ErrorhandlerComponent,
    },
    {
        path:'Attributedirective',
        component:AttributedirectiveComponent,
    },
    {
        path:'LoginForm',
        component:LoginformComponent,
    },
    {
        path:'rxjsdemo',
        component:RxjsdemoComponent,
        children: [
            {
              path: 'subject', 
              component: SubjectComponent,
            },
            {
              path: 'subjectbehaviour',
              component:BehaviourSubjectComponent, 
            },
            {
                path: 'subjectasync',
                component: AsyncSubjectComponent, 
              },
              {
                path: 'subjectreplay',
                component: ReplaySubjectComponent, 
              }
          ],
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{

}
