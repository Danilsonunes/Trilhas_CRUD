import { Component, OnInit } from '@angular/core';
import { Trilha } from '../../models/Trilha';
import { TrilhaService } from '../../trilha.service';

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
}
