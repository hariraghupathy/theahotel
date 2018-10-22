import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButton } from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
    imports: [MatBadgeModule, MatButtonModule],
    exports: [MatBadgeModule, MatButtonModule]
})

export class MaterialModule { }
