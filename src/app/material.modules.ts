import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
        MatMenuModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        CdkAccordionModule,
        MatExpansionModule,
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
        MatMenuModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        CdkAccordionModule,
        MatExpansionModule,
    ],
    providers: [
    ]
})

export class MaterialModule { }