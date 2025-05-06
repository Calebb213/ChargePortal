import {RouterModule,Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'maker', loadChildren: () => import('./modules/maker/maker.module').then(m => m.MakerModule) },
    { path: 'approver', loadChildren: () => import('./modules/approver/approver.module').then(m => m.ApproverModule) },
    { path: '', redirectTo: 'approver', pathMatch: 'full' }
];
