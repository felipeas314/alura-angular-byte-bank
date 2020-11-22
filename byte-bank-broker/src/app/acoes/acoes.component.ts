import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';
import { AcoesService } from './acoes.service';
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();

  acoes: Acoes;

  constructor(private acaoService: AcoesService) {}

  ngOnInit(): void {
    this.acaoService.getAcoes().subscribe((retornoApi)=>{
      this.acoes = retornoApi.payload;
    });
  }


}
