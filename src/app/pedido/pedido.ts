import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Pedido as PedidoModel } from '../models/pedido';
import { CestaService } from '../services/cesta';


@Component({
  selector: 'app-pedido',

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './pedido.html',
  styleUrl: './pedido.css'
})
export class Pedido {

  pedido: PedidoModel =
    new PedidoModel();

  mensagem: string = '';

  numeroCartao: string = '';

  nomeCartao: string = '';

  validadeCartao: string = '';

  cvv: string = '';


  constructor(
    private cestaService: CestaService
  ) {

    this.pedido.valorProdutos =
      this.cestaService
        .calcularTotalProdutos();

    this.pedido.desconto =
      this.cestaService
        .getDesconto();

    this.pedido.frete =
      this.cestaService
        .getFrete();

    this.pedido.valorTotal =
      this.cestaService
        .calcularTotalFinal();

  }


  formatarCep() {

    let numeros =
      this.pedido.cep
        .replace(/\D/g, '');


    if (
      numeros.length > 8
    ) {

      numeros =
        numeros.substring(
          0,
          8
        );

    }


    if (
      numeros.length <= 5
    ) {

      this.pedido.cep =
        numeros;

    } else {

      this.pedido.cep =
        numeros.substring(
          0,
          5
        )
        + '-'
        + numeros.substring(
          5
        );

    }

  }


  formatarCartao() {

    let numeros =
      this.numeroCartao
        .replace(/\D/g, '');


    if (
      numeros.length > 16
    ) {

      numeros =
        numeros.substring(
          0,
          16
        );

    }


    this.numeroCartao =
      numeros.replace(
        /(\d{4})(?=\d)/g,
        '$1 '
      );

  }


  formatarValidade() {

    let numeros =
      this.validadeCartao
        .replace(/\D/g, '');


    if (
      numeros.length > 4
    ) {

      numeros =
        numeros.substring(
          0,
          4
        );

    }


    if (
      numeros.length <= 2
    ) {

      this.validadeCartao =
        numeros;

    } else {

      this.validadeCartao =
        numeros.substring(
          0,
          2
        )
        + '/'
        + numeros.substring(
          2
        );

    }

  }


  finalizarCompra(
    form: any
  ) {

    if (
      form.valid
    ) {

      const dadosPedido = {

        pedido:
          this.pedido,

        numeroCartao:
          this.numeroCartao,

        nomeCartao:
          this.nomeCartao,

        validadeCartao:
          this.validadeCartao

      };


      localStorage.setItem(
        'matrix_pedido',
        JSON.stringify(
          dadosPedido
        )
      );


      this.mensagem =
        'Compra realizada com sucesso!';


      this.cestaService
        .limparCesta();

    } else {

      this.mensagem =
        'Preencha todos os campos corretamente.';

    }

  }

}