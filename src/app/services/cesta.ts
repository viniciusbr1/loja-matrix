import { Injectable } from '@angular/core';

import { ItemCesta } from '../models/item-cesta';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  itens: ItemCesta[] = [];

  desconto: number = 0;

  frete: number = 0;


  adicionarProduto(produto: Produto) {

    const itemExistente = this.itens.find(
      item => item.produto.id === produto.id
    );

    if (itemExistente) {

      itemExistente.quantidade++;

    } else {

      const novoItem = new ItemCesta();

      novoItem.produto = produto;
      novoItem.quantidade = 1;

      this.itens.push(novoItem);

    }

  }


  getItens() {

    return this.itens;

  }


  aumentarQuantidade(item: ItemCesta) {

    item.quantidade++;

  }


  diminuirQuantidade(item: ItemCesta) {

    if (item.quantidade > 1) {

      item.quantidade--;

    }

  }


  removerItem(item: ItemCesta) {

    const posicao = this.itens.indexOf(item);

    if (posicao >= 0) {

      this.itens.splice(posicao, 1);

    }

  }


  calcularTotalProdutos() {

    let total = 0;

    for (let item of this.itens) {

      total += item.produto.preco * item.quantidade;

    }

    return total;

  }


  salvarDesconto(valor: number) {

    this.desconto = valor;

  }


  getDesconto() {

    return this.desconto;

  }


  salvarFrete(valor: number) {

    this.frete = valor;

  }


  getFrete() {

    return this.frete;

  }


  calcularTotalFinal() {

    return this.calcularTotalProdutos()
      - this.desconto
      + this.frete;

  }


  limparCesta() {

    this.itens.splice(0, this.itens.length);

    this.desconto = 0;

    this.frete = 0;

  }

}