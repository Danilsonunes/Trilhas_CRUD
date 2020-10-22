import { Component, OnInit } from '@angular/core';
import { Trilha } from '../../models/Trilha';
import { TrilhaService } from '../../trilha.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trilhas',
  templateUrl: './trilhas.component.html',
  styleUrls: ['./trilhas.component.css'],
})
export class TrilhasComponent implements OnInit {
  trilhas: Trilha[];

  constructor(private trilhaService: TrilhaService) {}

  ngOnInit(): void {
    this.trilhaService.getTrilhas().subscribe((data: Trilha[]) => {
      this.trilhas = data;
    });
  }
  deleteTrilha(id: any) {
    Swal.fire({
      title: 'Tem certeza de querer excluir esta trilha?',
      text: 'Tome cuidado voce esta proximo a deletar esta trilha!!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim! deletar por favor',
    }).then((result) => {
      if (result.value === true) {
        this.trilhaService.deleteTrilha(id).subscribe();
        const index = this.trilhas.indexOf(id);
        this.trilhas.splice(index, 1);
        Swal.fire('Deletado', 'A trilha foi deletada!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelar', 'Retornando a lista de trilhas', 'error');
      }
    });
  }
}
