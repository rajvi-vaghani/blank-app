import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productModel = {
    productName: {
      appearance: "outline",
      type: "text",
      value: "",
      placeholder: "Enter product name",
      name: 'productName',
      rules: {
        required: true,
      }
    },
    category: {
      appearance: "outline",
      type: "text",
      value: "",
      placeholder: "Enter category name",
      name: 'category',
      rules: {
        required: true,
      },
    },
    description: {
      appearance: "outline",
      type: "text",
      value: "",
      placeholder: "Enter description",
      name: 'description',
      rules: {
        required: true,
      }
    },
    price: {
      appearance: "outline",
      type: "number",
      value: '',
      placeholder: "Enter price",
      name: 'price',
      rules: {
        required: true,
      }
    },
    inStock: {
      appearance: "outline",
      type: "text",
      value: "",
      name: 'inStock',
      placeholder: "Enter price",
      rules: {
        required: true,
      },
    },
    clothSize: {
      appearance: "outline",
      label: "clothSize",
      value: "",
      name: 'clothSize',
      type: "text",
      rules: {
        required: true,
      },
    },
  }
  productdata: any = []

  constructor(public dialogRef: MatDialogRef<ProductFormComponent>, private router: Router, private user_service: UserApiService, @Inject(MAT_DIALOG_DATA) public data: ProductComponent) {

  }

  ngOnInit(): void {
    if (this.data) {
      this.productdata = this.data
      this.productModel.productName.value = this.productdata.productName
      this.productModel.category.value = this.productdata.category
      this.productModel.description.value = this.productdata.description
      this.productModel.price.value = this.productdata.price
      this.productModel.inStock.value = this.productdata.inStock
      this.productModel.clothSize.value = this.productdata.clothSize
    }
  }

  submit(productForm: any) {
    if (productForm.invalid) {
      return
    } else {



      if (this.data) {
        const payload = {
          productName: productForm.value.productName,
          category: productForm.value.category,
          description: productForm.value.description,
          price: productForm.value.price,
          inStock: productForm.value.inStock,
          clothSize: productForm.value.clothSize,
          id: this.productdata._id,
        }
        this.user_service.updateProduct(payload).subscribe((res: any) => {
          if (res.isSuccess) {
            this.router.navigateByUrl('/component/product')
          }
        })
      } else {
        const payload = {
          productName: productForm.value.productName,
          category: productForm.value.category,
          description: productForm.value.description,
          price: productForm.value.price,
          inStock: productForm.value.inStock,
          clothSize: productForm.value.clothSize,

        }
        this.user_service.addProduct(payload).subscribe((res: any) => {
          if (res.isSuccess) {
            this.router.navigateByUrl('/component/product')
          }
        })
      }

    }

    this.dialogRef.close(false);
  }

  onDismiss() {
    this.router.navigateByUrl('/component/product')
    this.dialogRef.close(false);
  }

}
