import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrilhaService } from '../../trilha.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  trilhaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private trilhaService: TrilhaService
  ) {
    this.createForm();
  }

  createForm() {
    this.trilhaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      info_onibus: ['', Validators.required],
      localizacao: ['', Validators.required],
      cadeirante: ['', Validators.required],
    });
  }
  /**
   * Metodo responsable por adicionar una nueva trilha
   *
   */
  createNewTrilha(nome, descricao, info_onibus, localizacao, cadeirante) {
    this.trilhaService.createNewTrilha(
      nome,
      descricao,
      info_onibus,
      localizacao,
      cadeirante
    );
    Swal.fire({
      title: 'Trilha adicionada com sucesso!!!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: true,
    });
    this.trilhaForm.reset();
  }

  ngOnInit(): void {}
}
