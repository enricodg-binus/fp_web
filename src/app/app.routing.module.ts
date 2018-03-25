import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

