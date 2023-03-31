import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UserApiService } from '../service/user-api.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ProductData: Array<ProductData> = []

  Columns: Array<cols> = [];

  constructor(private apiservice: UserApiService, public sanitizer: DomSanitizer, public dialog: MatDialog, private alertService: AlertService, private router: Router, public ref: ChangeDetectorRef) {

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
        cell: (element: Record<string, any>) => 'edit'
      },
      {
        columnDef: 'delete',
        cell: (element: Record<string, any>) => 'delete'
      },
    ]
  }

  ngOnInit(): void {
    this.apiservice.getProduct().subscribe((res: any) => {
      this.ProductData = res.data
      this.ref.detectChanges()
    })
  }

  openDialouge() {
    this.router.navigateByUrl(`/component/product/add`)
    this.dialog.open(ProductFormComponent, {
      height: '700px',
      width: '500px',
      disableClose: true,
    });
  }

  edit(element: any) {
    this.router.navigateByUrl(`/component/product/update/${element._id}`)
    this.dialog.open(ProductFormComponent, {
      height: '700px',
      width: '500px',
      disableClose: true,
      data: element
    });
  }

  delete(element: any) {
    this.router.navigateByUrl(`/component/product/delete/${element._id}`)
    const dialog = this.dialog.open(ConfirmComponent, {
      height: '200px',
      width: '400px',
    });
    dialog.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.apiservice.deleteProduct(element._id).subscribe(res => {
          if (res) {
            this.alertService.openSnackBar('Data delete successfully!!');
            this.apiservice.getProduct().subscribe((res: any) => {
              this.ProductData = res.data;
            })
          }
        })
      }
      this.router.navigateByUrl('/component/product')
    });
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

