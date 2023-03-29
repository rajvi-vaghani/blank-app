import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'blank-app';

  ProductData: Array<ProductData> = []
  edit: string = `<i class="bi bi-pen"></i>`
  delete: string = '<i class="bi bi-trash"></i>'

  Columns: Array<cols> = [];

  inputfields = {
    email: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter email",
      name: 'email',
      rules: {
        required: true
      }
    },
    username: {
      type: "text",
      value: "",
      appearance: "outline",
      name: 'username',
      rules: {
        required: true,
      }
    },
    mail: {
      type: "text",
      value: "",
      appearance: "outline",
      name: 'mail',
      rules: {
        required: true,
      }
    },
  }

  constructor(public sanitizer: DomSanitizer,private http: HttpClient) {
    this.Columns = [
      {
        columnDef: 'category',
        cell: (element: Record<string, any>) => `${element['category']}`
      },
      {
        columnDef: 'productName',
        cell: (element: Record<string, any>) => `${element['productName']}`
      },
      {
        columnDef: 'clothSize',
        cell: (element: Record<string, any>) => `${element['clothSize']}`
      },

      {
        columnDef: 'price',
        cell: (element: Record<string, any>) => `${element['price']}`
      },
      {
        columnDef: 'inStock',
        cell: (element: Record<string, any>) => `${element['inStock']}`
      },
      {
        columnDef: 'description',
        cell: (element: Record<string, any>) => `${element['description']}`
      },
      {
        columnDef: 'edit',
        cell: (element: Record<string, any>) => `${this.edit}`
      },
      {
        columnDef: 'delete',
        cell: (element: Record<string, any>) => `${this.delete}`
      },
    ]
  }


  ngOnInit(): void {
    this.http.get('https://student-api.mycodelibraries.com/api/product/get').subscribe((res: any) => {
      this.ProductData = res.data
    })
  }


}



export interface ProductData {
  category: string,
  productName: string,
  clothSize: string,
  price: string,
  inStock: string,
  description: string,
  _id: string,
}

export interface cols {
  columnDef: any;
  cell?: Function;
  cellAction?: any;
}