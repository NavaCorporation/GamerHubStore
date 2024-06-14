export class Reporte {
    id: number;
    title: string;
    description: string;
    data: any[];
  
    constructor(id: number, title: string, description: string, data: any[]) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.data = data;
    }
  }