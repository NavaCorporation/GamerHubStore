export class Producto  {

    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    isVerified: boolean;
   

      constructor( id:number,name:string, description: string, quantity: number ,price:number,isVerified: boolean ){
        this.id = id;
        this.name=name;
        this.description=description;
        this.quantity=quantity;
        this.price=price;
        this.isVerified = isVerified;
    }


}