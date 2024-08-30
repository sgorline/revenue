import { InputComponent } from './financials/input/input.component';
import { OutputComponent } from './financials/output/output.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'financials/input', component: InputComponent },
    { path: 'financials/output', component: OutputComponent }
];