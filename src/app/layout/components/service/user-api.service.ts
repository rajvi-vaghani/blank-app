import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  base_url = 'https://student-api.mycodelibraries.com/api'

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(`${this.base_url}/product/get`)
  }

  getProductById(id: any) {
    return this.http.get(`${this.base_url}/product/get-product-by-id?id=${id}`)
  }

  addProduct(payload: any) {
    return this.http.post(`${this.base_url}/product/add`, payload)
  }

  updateProduct(payload: any) {
    return this.http.post(`${this.base_url}/product/update`, payload)
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.base_url}/product/delete?id=${id}`)
  }

  getStudent() {
    return this.http.get(`${this.base_url}/user/get`)
  }

  getStudentById(id: any) {
    return this.http.get(`${this.base_url}/user/get-user-by-id?id=${id}`)
  }

  addStudent(payload: any) {
    return this.http.post(`${this.base_url}/user/add`, payload)
  }

  updateStudent(payload: any) {
    return this.http.post(`${this.base_url}/user/update`, payload)
  }

  deleteStudent(id: string) {
    return this.http.delete(`${this.base_url}/user/delete?id=${id}`)
  }
}
