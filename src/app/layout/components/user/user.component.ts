import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  studentData: Array<studentData> = []
  edit: string = `<i class="bi bi-pen"></i>`
  delete: string = '<i class="bi bi-trash"></i>'

  Columns: Array<cols> = [];

  constructor(private apiservice: UserApiService, public sanitizer: DomSanitizer) {

    this.Columns = [
      {
        columnDef: 'image',
        cell: (element: Record<string, any>) => `${element['image']}`
      },
      {
        columnDef: 'firstName',
        cell: (element: Record<string, any>) => `${element['firstName']}`
      },
      {
        columnDef: 'lastName',
        cell: (element: Record<string, any>) => `${element['lastName']}`
      },
      {
        columnDef: 'age',
        cell: (element: Record<string, any>) => `${element['age']}`
      },
      {
        columnDef: 'city',
        cell: (element: Record<string, any>) => `${element['city']}`
      },
      {
        columnDef: 'gender',
        cell: (element: Record<string, any>) => `${element['gender']}`
      },
      {
        columnDef: 'hobbies',
        cell: (element: Record<string, any>) => `${element['hobbies']}`
      },
      {
        columnDef: 'userName',
        cell: (element: Record<string, any>) => `${element['firstName']}`
      },
      {
        columnDef: 'userName2',
        cell: (element: Record<string, any>) => `${element['firstName']}`
      },
      {
        columnDef: 'edit',
        cell: (element: Record<string, any>) => "${this.edit}"
      },
      {
        columnDef: 'delete',
        cell: (element: Record<string, any>) => `${this.delete}`
      },
    ]
  }

  ngOnInit(): void {
    this.apiservice.getStudent().subscribe((res: any) => {
      this.studentData = res.data
    })
  }

}


export interface cols {
  columnDef: any;
  cell?: Function;
  cellAction?: any;
}

export interface studentData {
  firstName: string,
  lastName: string,
  hobbies: string,
  gender: string,
  city: string,
  _id: string,
  age: number,
}
