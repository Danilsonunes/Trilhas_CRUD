/**
 * archivo: src/app/trilhas.service.ts
 * descripcion: archivo encargado de reaqlizar las transmiciones de los request entre Back y Front
 * fecha: 29/09/2020
 * autor: danilson nunes karliana diaz alejandro echezuria
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrilhaService {
  url = 'http://localhost:3000/api'; // ===> URL de la API viniendo del back-end

  constructor(private http: HttpClient) {}

  /**
   * Metodo responsable por crear una 'nueva trilha'
   */

  createNewTrilha(nome, descricao, info_onibus, localizacao, cadeirante) {
    const trilhas = {
      nome,
      descricao,
      info_onibus,
      localizacao,
      cadeirante,
    };
    console.log(trilhas);
    // ==> (POST - url en el Back-end): http://localhost:3000/api/trilhas
    this.http
      .post(`${this.url}/trilhas`, trilhas)
      .subscribe((res) => console.log('Hecho'));
  }

  /**
   * Metodo responsable por listar todas las 'trilhas'
   */

  getTrilhas() {
    // ==> (GET - url en el back-end): http://localhost:3000/api/trilhas
    return this.http.get(`${this.url}/trilhas`);
  }

  /**
   * Metodo responsable por la accion del boton editar en el archivo 'updateTrilhas.component.html'
   */

  editTrilha(id) {
    // ==> (GET - url en el back-end): http://localhost:3000/api/trilhas/id
    console.log(id);
    return this.http.get(`${this.url}/trilhas/${id}`);
  }

  updateTrilha(
    nome: any,
    descricao: any,
    info_onibus: any,
    localizacao: any,
    cadeirante: any,
    id: number
  ) {
    console.log(id);
    const trilha = {
      nome,
      descricao,
      info_onibus,
      localizacao,
      cadeirante,
      id,
    };

    return this.http
      .put(`${this.url}/trilhas/${id}`, trilha)
      .subscribe((res) => console.log('bien!'));
  }
  // deleteTrilha(id) {
  //   return this.http.delete(`${this.url}/trilhas/${id}`);
  // }
}
