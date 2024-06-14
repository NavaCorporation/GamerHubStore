import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Inventario } from '../models/inventario';
import { InventarioService } from '../services/inventario.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  inventoryForm: FormGroup;
  products: Producto[] = [];
  currentProduct: Producto | null = null;

  constructor(private fb: FormBuilder, private productInventoryService: InventarioService,
    private router: Router,
  ) {
    this.inventoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      isVerified: [false]
    });
  }

  ngOnInit(): void {
    this.products = this.productInventoryService.getProducts();
  }

  addItem(): void {
    if (this.inventoryForm.valid) {
      const { name, description, price, quantity, isVerified } = this.inventoryForm.value;
      if (this.currentProduct) {
        this.currentProduct.name = name;
        this.currentProduct.description = description;
        this.currentProduct.price = price;
        this.currentProduct.quantity = quantity;
        this.currentProduct.isVerified = isVerified;
        this.productInventoryService.updateProduct(this.currentProduct);
      } else {
        const newProduct = new Producto(
          this.products.length + 1,
          name,
          description,
          price,
          quantity,
          isVerified
        );
        this.productInventoryService.addProduct(newProduct);
      }
      this.resetForm();
    }
  }

  editItem(product: Producto): void {
    this.currentProduct = product;
    this.inventoryForm.patchValue(product);
  }

  removeItem(productId: number): void {
    this.productInventoryService.removeProduct(productId);
    this.products = this.productInventoryService.getProducts();
  }

  resetForm(): void {
    this.inventoryForm.reset({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      isVerified: false
    });
    this.currentProduct = null;
  }
  goBack() {
    window.history.back();
  }


  

}










