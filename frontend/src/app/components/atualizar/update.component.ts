import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrilhaService } from '../../trilha.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  trilhaForm: FormGroup;
  trilha: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trilhaService: TrilhaService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  /**
   * Metodo responsable por crear un formulario al entrar en la pagina de actualizar una trilha por id
   *
   */
  createForm() {
    this.trilhaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      info_onibus: ['', Validators.required],
      localizacao: ['', Validators.required],
      cadeirante: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.trilhaService.editTrilha(params.id).subscribe((res) => {
        this.trilha = res[0];
        console.log(res[0]);
        this.trilhaForm.setValue({
          nome: this.trilha.nome,
          descricao: this.trilha.descricao,
          info_onibus: this.trilha.info_onibus,
          localizacao: this.trilha.localizacao,
          cadeirante: this.trilha.cadeirante,
        });
      });
    });
  }
  /**
   * Metodo responsable por  actualizar una trilha por id
   *
   */
  updateTrilha(nome, descricao, info_onibus, localizacao, cadeirante, id) {
    this.route.params.subscribe((params) => {
      this.trilhaService.updateTrilha(
        nome,
        descricao,
        info_onibus,
        localizacao,
        cadeirante,
        id
      );
      console.log(id);
      this.router.navigate(['trilhas']);

      Swal.fire({
        title: 'Trilha atualizada com susseso',
        icon: 'success',
        showConfirmButton: true,
        timer: 1500,
      });
    });
  }
}
