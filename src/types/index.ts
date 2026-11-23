export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  createdAt?: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
  descripcion: string;
  activa: boolean;
}

export interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
  activo: boolean;
}

export interface RespuestaProductos {
  meta: { total: number; page: number; limit: number };
  data: Producto[];
}

export interface RespuestaLogin {
  token: string;
  usuario: Usuario;
}