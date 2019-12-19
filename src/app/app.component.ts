import {
    NgModule,
    Component,
    ViewChild,
    enableProdMode,
    AfterViewInit
} from "@angular/core";
import {
    DxFormComponent
} from "devextreme-angular";

import { Employee, Service } from "./app.service";

 enableProdMode();


@Component({
    selector: 'my-app',
    providers: [Service],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild(DxFormComponent,{read:true, static: false}) myform: DxFormComponent;
    employee: Employee;
    positions: string[];
    rules: Object;

    constructor(service: Service) {
        this.employee = service.getEmployee();
        this.positions = service.getPositions();
        this.rules = { X: /[02-9]/ };
    }

    onSelectionChanged() {
        alert("onSelectionChanged");
      }

}