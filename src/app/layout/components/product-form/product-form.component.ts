import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  productModel = {
    productName: {
      appearance: "outline",
      type: "text",
      value: "test",
      placeholder: "Enter product name",
      name: 'productName',
      rules: {
        required: true,
      }
    },
    category: {
      appearance: "outline",
      type: "text",
      value: "test",
      placeholder: "Enter category name",
      name: 'category',
      rules: {
        required: true,
      },
    },
    description: {
      appearance: "outline",
      type: "text",
      value: "test",
      placeholder: "Enter description",
      name: 'description',
      rules: {
        required: true,
      }
    },
    price: {
      appearance: "outline",
      type: "number",
      value: '1',
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
        // required: true,
      },
    },
    clothSize: {
      appearance: "outline",
      label: "clothSize",
      value: "",
      name: 'clothSize',
      type: "checkbox",
      rules: {
        // required: true,
      },
    },
  }


  constructor(public dialogRef: MatDialogRef<ProductFormComponent>, private router: Router, private user_service: UserApiService,) {

  }

  submit(productForm: any) {
    console.log('productForm', productForm)
    if (productForm.invalid) {
      return
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
          this.router.navigateByUrl('/component/product-grid')
          this.dialogRef.close(false);
        }

      })
    }
  }

  onDismiss() {
    this.router.navigateByUrl('/component/product-grid')
    this.dialogRef.close(false);
  }

}
