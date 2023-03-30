import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductFormComponent } from '../product-form/product-form.component';
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

  constructor(private apiservice: UserApiService, public sanitizer: DomSanitizer, public dialog: MatDialog) {

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

  openDialouge() {
    const dialog = this.dialog.open(ProductFormComponent, {
      height: '700px',
      width: '500px',
      disableClose: true,
    });

    dialog.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.apiservice.getStudent().subscribe((res: any) => {
          this.ProductData = res.data;
        })
      }, 2000);

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

