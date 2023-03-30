import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ProductData: Array<ProductData> = []
  edit: string = `<i class="bi bi-pen"></i>`
  delete: string = '<i class="bi bi-trash"></i>'

  Columns: Array<cols> = [];

  constructor(private apiservice: UserApiService, public sanitizer: DomSanitizer) {

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
    this.apiservice.getProduct().subscribe((res: any) => {
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

