export interface IGroup {
  estado: string;
  code:   number;
  grupos: Grupo[];
}

export interface Grupo {
  id:           string;
  codigo:       string;
  nombre:       string;
  nombre_corto: NombreCorto;
  grpcolor:     string;
  rutafoto:     string;
  estatus:      string;
  user_id:      string;
  detalles:     string;
  cnt_subgrupo: string;
}

export interface ISubGroup {
  estado:    string;
  code:      number;
  subgrupos: Subgrupo[];
}

export interface Subgrupo {
  id:           string;
  codigo:       string;
  nombre:       string;
  nombre_corto: NombreCorto;
  rutafoto:     string;
  estatus:      string;
  grupo_id:     string;
  user_id:      string;
}

export enum NombreCorto {
  Alic1125 = "ALIC 1(1.25%)",
  Alic2300 = "ALIC 2(3.00%)",
  Empty = "",
  NoClasificado = "No Clasificado",
}

export interface IProduct {
  estado:    string;
  code:      number;
  productos: Producto[];
}

export interface Producto {
  id:          string;
  codigo:      string;
  grupo_id:    string;
  subgrupo_id: string;
  nombre:      string;
  nombrecorto: string;
  referencia:  Referencia;
  marca:       string;
  unidad:      string;
  costo:       string;
  precio1:     string;
  precio2:     string;
  modified:    Date;
  created:     Date;
  user_id:     string;
  precio3:     string;
  precio4:     string;
  precio5:     string;
  precio6:     string;
  precio7:     string;
  empaque:     string;
  unidadgrp:   Unidadgrp;
  costgrp:     string;
  precio1grp:  string;
  precio2grp:  string;
  precio3grp:  string;
  precio4grp:  string;
  precio5grp:  string;
  precio6grp:  string;
  precio7grp:  string;
  impuesto:    string;
  existencia:  string;
  urlImg:      string;
  decimales:   string;
  detalles:    string;
  inWishList:  boolean;
  inCart:      boolean;
}

export enum Referencia {
  Empty = "",
  Sy80100 = "SY80100",
  Sy8050 = "SY8050",
  The7592402825990 = "7592402825990",
}


export enum Unidadgrp {
  EmpBulto = "Emp/Bulto",
  Empty = "",
}
