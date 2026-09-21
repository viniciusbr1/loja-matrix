import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Produto } from '../models/produto';
import { Processador } from '../models/processador';
import { Memoria } from '../models/memoria';
import { Gabinete } from '../models/gabinete';
import { Cooler } from '../models/cooler';
import { PlacaVideo } from '../models/placa-video';
import { Fonte } from '../models/fonte';
import { Ssd } from '../models/ssd';
import { Monitor } from '../models/monitor';

import { CestaService } from '../services/cesta';


type ProdutoLoja =
  Processador |
  Memoria |
  Gabinete |
  Cooler |
  PlacaVideo |
  Fonte |
  Ssd |
  Monitor;


@Component({
  selector: 'app-vitrine',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {

  produtoSelecionado: Produto | null = null;

  categoriaSelecionada: string = 'Todos';

  pesquisa: string = '';

  mensagemCarrinho: string = '';

  produtos: ProdutoLoja[] = [

    // ============================================
    // PROCESSADORES
    // ============================================

    {
      id: 1,
      nome: 'Processador Orion 5',
      descricao: 'Processador de entrada para estudos, trabalho e jogos leves.',
      preco: 799.90,
      imagem: '1.jpg',
      categoria: 'Processador',
      detalhes: [
        '6 núcleos',
        '12 threads',
        'Frequência de até 4.4 GHz',
        'Socket AM5'
      ],
      nucleos: 6,
      threads: 12,
      frequencia: '4.4 GHz',
      socket: 'AM5'
    },

    {
      id: 2,
      nome: 'Processador ZENITH 9',
      descricao: 'Processador intermediário para jogos e produtividade.',
      preco: 999.90,
      imagem: '2.jpg',
      categoria: 'Processador',
      detalhes: [
        '6 núcleos',
        '12 threads',
        'Frequência de até 4.7 GHz',
        'Socket AM5'
      ],
      nucleos: 6,
      threads: 12,
      frequencia: '4.7 GHz',
      socket: 'AM5'
    },

    {
      id: 3,
      nome: 'Processador NEXU 7',
      descricao: 'Processador rápido para computadores gamers.',
      preco: 1299.90,
      imagem: '3.jpg',
      categoria: 'Processador',
      detalhes: [
        '8 núcleos',
        '16 threads',
        'Frequência de até 4.8 GHz',
        'Socket AM5'
      ],
      nucleos: 8,
      threads: 16,
      frequencia: '4.8 GHz',
      socket: 'AM5'
    },

    {
      id: 4,
      nome: 'Processador TITAN X',
      descricao: 'Processador de alto desempenho para jogos competitivos.',
      preco: 1499.90,
      imagem: '4.jpg',
      categoria: 'Processador',
      detalhes: [
        '8 núcleos',
        '16 threads',
        'Frequência de até 5.0 GHz',
        'Socket AM5'
      ],
      nucleos: 8,
      threads: 16,
      frequencia: '5.0 GHz',
      socket: 'AM5'
    },

    {
      id: 5,
      nome: 'AURORA PRO',
      descricao: 'Processador potente para jogos, edição e multitarefa.',
      preco: 1699.90,
      imagem: '5.jpg',
      categoria: 'Processador',
      detalhes: [
        '10 núcleos',
        '20 threads',
        'Frequência de até 5.1 GHz',
        'Socket AM5'
      ],
      nucleos: 10,
      threads: 20,
      frequencia: '5.1 GHz',
      socket: 'AM5'
    },

    {
      id: 6,
      nome: 'Processador VOLTIX 8',
      descricao: 'Processador avançado para criação de conteúdo e games.',
      preco: 1899.90,
      imagem: '6.jpg',
      categoria: 'Processador',
      detalhes: [
        '12 núcleos',
        '24 threads',
        'Frequência de até 5.2 GHz',
        'Socket AM5'
      ],
      nucleos: 12,
      threads: 24,
      frequencia: '5.2 GHz',
      socket: 'AM5'
    },

    {
      id: 7,
      nome: 'Processador FALCON 4',
      descricao: 'Processador de alto desempenho para usuários exigentes.',
      preco: 2199.90,
      imagem: '7.jpg',
      categoria: 'Processador',
      detalhes: [
        '12 núcleos',
        '24 threads',
        'Frequência de até 5.4 GHz',
        'Socket AM5'
      ],
      nucleos: 12,
      threads: 24,
      frequencia: '5.4 GHz',
      socket: 'AM5'
    },

    {
      id: 8,
      nome: 'Processador SENTINEL6',
      descricao: 'Processador premium para jogos e aplicações profissionais.',
      preco: 2599.90,
      imagem: '8.jpg',
      categoria: 'Processador',
      detalhes: [
        '16 núcleos',
        '32 threads',
        'Frequência de até 5.5 GHz',
        'Socket AM5'
      ],
      nucleos: 16,
      threads: 32,
      frequencia: '5.5 GHz',
      socket: 'AM5'
    },

    {
      id: 9,
      nome: 'Processador TRIDENT 3',
      descricao: 'Processador extremo para alto desempenho e multitarefa.',
      preco: 2999.90,
      imagem: '9.jpg',
      categoria: 'Processador',
      detalhes: [
        '16 núcleos',
        '32 threads',
        'Frequência de até 5.7 GHz',
        'Socket AM5'
      ],
      nucleos: 16,
      threads: 32,
      frequencia: '5.7 GHz',
      socket: 'AM5'
    },

    {
      id: 10,
      nome: 'Processador QUANTUM ULTRA',
      descricao: 'Processador top de linha para estações de alto desempenho.',
      preco: 3699.90,
      imagem: '10.jpg',
      categoria: 'Processador',
      detalhes: [
        '24 núcleos',
        '48 threads',
        'Frequência de até 5.8 GHz',
        'Socket AM5'
      ],
      nucleos: 24,
      threads: 48,
      frequencia: '5.8 GHz',
      socket: 'AM5'
    },


    // ============================================
    // MEMÓRIAS
    // ============================================

    {
      id: 11,
      nome: 'Memória MATRIX 8GB DDR4',
      descricao: 'Memória para computadores de entrada e uso cotidiano.',
      preco: 149.90,
      imagem: '11.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 8 GB',
        'DDR4',
        '3200 MHz',
        '1 módulo'
      ],
      capacidade: '8 GB',
      tipo: 'DDR4',
      frequencia: '3200 MHz',
      quantidadeModulos: 1
    },

    {
      id: 12,
      nome: 'Memória MATRIX 16GB DDR4',
      descricao: 'Memória ideal para jogos e multitarefa.',
      preco: 229.90,
      imagem: '12.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 16 GB',
        'DDR4',
        '3200 MHz',
        '1 módulo'
      ],
      capacidade: '16 GB',
      tipo: 'DDR4',
      frequencia: '3200 MHz',
      quantidadeModulos: 1
    },

    {
      id: 13,
      nome: 'Memória MATRIX 16GB RGB',
      descricao: 'Memória gamer com iluminação RGB.',
      preco: 299.90,
      imagem: '13.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 16 GB',
        'DDR4',
        '3600 MHz',
        '2 módulos de 8 GB'
      ],
      capacidade: '16 GB',
      tipo: 'DDR4',
      frequencia: '3600 MHz',
      quantidadeModulos: 2
    },

    {
      id: 14,
      nome: 'Memória MATRIX 32GB DDR4',
      descricao: 'Kit de memória para computadores gamers e profissionais.',
      preco: 449.90,
      imagem: '14.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 32 GB',
        'DDR4',
        '3600 MHz',
        '2 módulos de 16 GB'
      ],
      capacidade: '32 GB',
      tipo: 'DDR4',
      frequencia: '3600 MHz',
      quantidadeModulos: 2
    },

    {
      id: 15,
      nome: 'Memória MATRIX 16GB DDR5',
      descricao: 'Memória DDR5 de nova geração com alta velocidade.',
      preco: 349.90,
      imagem: '15.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 16 GB',
        'DDR5',
        '5200 MHz',
        '1 módulo'
      ],
      capacidade: '16 GB',
      tipo: 'DDR5',
      frequencia: '5200 MHz',
      quantidadeModulos: 1
    },

    {
      id: 16,
      nome: 'Memória MATRIX 32GB DDR5',
      descricao: 'Memória de alto desempenho para computadores modernos.',
      preco: 599.90,
      imagem: '16.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 32 GB',
        'DDR5',
        '5600 MHz',
        '2 módulos de 16 GB'
      ],
      capacidade: '32 GB',
      tipo: 'DDR5',
      frequencia: '5600 MHz',
      quantidadeModulos: 2
    },

    {
      id: 17,
      nome: 'Memória MATRIX 32GB DDR5 RGB',
      descricao: 'Kit gamer DDR5 com iluminação RGB.',
      preco: 699.90,
      imagem: '17.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 32 GB',
        'DDR5',
        '6000 MHz',
        '2 módulos de 16 GB'
      ],
      capacidade: '32 GB',
      tipo: 'DDR5',
      frequencia: '6000 MHz',
      quantidadeModulos: 2
    },

    {
      id: 18,
      nome: 'Memória MATRIX 48GB DDR5',
      descricao: 'Memória de alta capacidade para produtividade e criação.',
      preco: 899.90,
      imagem: '18.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 48 GB',
        'DDR5',
        '6000 MHz',
        '2 módulos de 24 GB'
      ],
      capacidade: '48 GB',
      tipo: 'DDR5',
      frequencia: '6000 MHz',
      quantidadeModulos: 2
    },

    {
      id: 19,
      nome: 'Memória MATRIX 64GB DDR5',
      descricao: 'Memória para estações de trabalho e tarefas pesadas.',
      preco: 1199.90,
      imagem: '19.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 64 GB',
        'DDR5',
        '6000 MHz',
        '2 módulos de 32 GB'
      ],
      capacidade: '64 GB',
      tipo: 'DDR5',
      frequencia: '6000 MHz',
      quantidadeModulos: 2
    },

    {
      id: 20,
      nome: 'Memória MATRIX 64GB Ultra',
      descricao: 'Kit premium de memória DDR5 de alta frequência.',
      preco: 1399.90,
      imagem: '20.jpg',
      categoria: 'Memória',
      detalhes: [
        'Capacidade de 64 GB',
        'DDR5',
        '6400 MHz',
        '2 módulos de 32 GB'
      ],
      capacidade: '64 GB',
      tipo: 'DDR5',
      frequencia: '6400 MHz',
      quantidadeModulos: 2
    },

        // ============================================
    // GABINETES
    // ============================================

    {
      id: 21,
      nome: 'Gabinete MATRIX Air Mini',
      descricao: 'Gabinete compacto com bom fluxo de ar para setups menores.',
      preco: 299.90,
      imagem: '21.jpg',
      categoria: 'Gabinete',
      detalhes: [
        'Mini Tower',
        'Cor preta',
        '2 fans',
        'Lateral em acrílico'
      ],
      tamanho: 'Mini Tower',
      cor: 'Preto',
      quantidadeFans: 2,
      vidroLateral: false
    },

    {
      id: 22,
      nome: 'Gabinete MATRIX Air',
      descricao: 'Gabinete gamer com frontal ventilada e ótimo espaço interno.',
      preco: 379.90,
      imagem: '22.jpg',
      categoria: 'Gabinete',
      detalhes: [
        'Mid Tower',
        'Cor preta',
        '3 fans',
        'Lateral em vidro temperado'
      ],
      tamanho: 'Mid Tower',
      cor: 'Preto',
      quantidadeFans: 3,
      vidroLateral: true
    },

    {
      id: 23,
      nome: 'Gabinete MATRIX Glass',
      descricao: 'Gabinete gamer com lateral em vidro e acabamento moderno.',
      preco: 449.90,
      imagem: '23.jpg',
      categoria: 'Gabinete',
      detalhes: [
        'Mid Tower',
        'Cor preta',
        '4 fans',
        'Lateral em vidro temperado'
      ],
      tamanho: 'Mid Tower',
      cor: 'Preto',
      quantidadeFans: 4,
      vidroLateral: true
    },

    {
      id: 24,
      nome: 'Gabinete MATRIX Glass White',
      descricao: 'Gabinete branco com vidro temperado e iluminação interna.',
      preco: 479.90,
      imagem: '24.jpg',
      categoria: 'Gabinete',
      detalhes: [
        'Mid Tower',
        'Cor branca',
        '4 fans',
        'Lateral em vidro temperado'
      ],
      tamanho: 'Mid Tower',
      cor: 'Branco',
      quantidadeFans: 4,
      vidroLateral: true
    },

    {
      id: 25,
      nome: 'Gabinete MATRIX RGB',
      descricao: 'Gabinete gamer com iluminação RGB e excelente ventilação.',
      preco: 549.90,
      imagem: '25.jpg',
      categoria: 'Gabinete',
      detalhes: [
        'Mid Tower',
        'Cor preta',
        '5 fans RGB',
        'Lateral em vidro temperado'
      ],
      tamanho: 'Mid Tower',
      cor: 'Preto',
      quantidadeFans: 5,
      vidroLateral: true
    },

    

    // ============================================
    // COOLERS
    // ============================================

    {
      id: 31,
      nome: 'Cooler MATRIX Frost 90',
      descricao: 'Cooler compacto para processadores de entrada.',
      preco: 99.90,
      imagem: '26.jpg',
      categoria: 'Cooler',
      detalhes: [
        'Air Cooler',
        'Fan de 90 mm',
        'Compatível com Intel e AMD',
        'Sem iluminação'
      ],
      tipo: 'Air Cooler',
      tamanhoFan: '90 mm',
      compatibilidade: 'Intel e AMD',
      iluminacao: 'Sem iluminação'
    },

    {
      id: 32,
      nome: 'Cooler MATRIX Frost 120',
      descricao: 'Cooler eficiente para computadores gamers e profissionais.',
      preco: 149.90,
      imagem: '27.jpg',
      categoria: 'Cooler',
      detalhes: [
        'Air Cooler',
        'Fan de 120 mm',
        'Compatível com Intel e AMD',
        'Iluminação LED'
      ],
      tipo: 'Air Cooler',
      tamanhoFan: '120 mm',
      compatibilidade: 'Intel e AMD',
      iluminacao: 'LED'
    },

    {
      id: 33,
      nome: 'Cooler MATRIX Frost RGB',
      descricao: 'Cooler gamer com iluminação RGB e boa capacidade térmica.',
      preco: 189.90,
      imagem: '28.jpg',
      categoria: 'Cooler',
      detalhes: [
        'Air Cooler',
        'Fan de 120 mm',
        'Compatível com Intel e AMD',
        'Iluminação RGB'
      ],
      tipo: 'Air Cooler',
      tamanhoFan: '120 mm',
      compatibilidade: 'Intel e AMD',
      iluminacao: 'RGB'
    },

    {
      id: 34,
      nome: 'Cooler MATRIX Tower 120',
      descricao: 'Cooler torre para processadores de médio desempenho.',
      preco: 229.90,
      imagem: '29.jpg',
      categoria: 'Cooler',
      detalhes: [
        'Air Cooler tipo torre',
        'Fan de 120 mm',
        'Compatível com Intel e AMD',
        'Iluminação RGB'
      ],
      tipo: 'Air Cooler Torre',
      tamanhoFan: '120 mm',
      compatibilidade: 'Intel e AMD',
      iluminacao: 'RGB'
    },

    {
      id: 35,
      nome: 'Cooler MATRIX Tower Dual',
      descricao: 'Cooler torre com duas ventoinhas para maior refrigeração.',
      preco: 299.90,
      imagem: '30.jpg',
      categoria: 'Cooler',
      detalhes: [
        'Air Cooler tipo torre',
        '2 fans de 120 mm',
        'Compatível com Intel e AMD',
        'Iluminação RGB'
      ],
      tipo: 'Air Cooler Torre',
      tamanhoFan: '2 x 120 mm',
      compatibilidade: 'Intel e AMD',
      iluminacao: 'RGB'
    },

    

        // ============================================
    // PLACAS DE VÍDEO
    // ============================================

    {
      id: 41,
      nome: 'Placa de Vídeo MATRIX GX 3050',
      descricao: 'Placa de vídeo para jogos em Full HD e uso geral.',
      preco: 1699.90,
      imagem: '31.jpg',
      categoria: 'Placa de Vídeo',
      detalhes: [
        '6 GB de memória de vídeo',
        'Memória GDDR6',
        'Clock de até 1.8 GHz',
        'Indicada para jogos em Full HD'
      ],
      memoriaVideo: '6 GB',
      tipoMemoria: 'GDDR6',
      clock: '1.8 GHz',
      fabricante: 'MATRIX'
    },

    {
      id: 42,
      nome: 'Placa de Vídeo MATRIX GX 3060',
      descricao: 'Placa de vídeo intermediária para jogos e criação de conteúdo.',
      preco: 2199.90,
      imagem: '32.jpg',
      categoria: 'Placa de Vídeo',
      detalhes: [
        '8 GB de memória de vídeo',
        'Memória GDDR6',
        'Clock de até 1.9 GHz',
        'Ideal para jogos em Full HD'
      ],
      memoriaVideo: '8 GB',
      tipoMemoria: 'GDDR6',
      clock: '1.9 GHz',
      fabricante: 'MATRIX'
    },

    {
      id: 43,
      nome: 'Placa de Vídeo MATRIX GX 4060',
      descricao: 'Placa de vídeo moderna com ótimo desempenho para jogos.',
      preco: 2599.90,
      imagem: '33.jpg',
      categoria: 'Placa de Vídeo',
      detalhes: [
        '8 GB de memória de vídeo',
        'Memória GDDR6',
        'Clock de até 2.4 GHz',
        'Suporte a tecnologias gráficas modernas'
      ],
      memoriaVideo: '8 GB',
      tipoMemoria: 'GDDR6',
      clock: '2.4 GHz',
      fabricante: 'MATRIX'
    },

    {
      id: 44,
      nome: 'Placa de Vídeo MATRIX GX 4060 Ti',
      descricao: 'Placa de vídeo para jogos competitivos e aplicações gráficas.',
      preco: 3199.90,
      imagem: '34.jpg',
      categoria: 'Placa de Vídeo',
      detalhes: [
        '8 GB de memória de vídeo',
        'Memória GDDR6',
        'Clock de até 2.5 GHz',
        'Excelente desempenho em Full HD e Quad HD'
      ],
      memoriaVideo: '8 GB',
      tipoMemoria: 'GDDR6',
      clock: '2.5 GHz',
      fabricante: 'MATRIX'
    },

    {
      id: 45,
      nome: 'Placa de Vídeo MATRIX GX 4070',
      descricao: 'Placa de vídeo de alto desempenho para jogos em alta resolução.',
      preco: 4299.90,
      imagem: '35.jpg',
      categoria: 'Placa de Vídeo',
      detalhes: [
        '12 GB de memória de vídeo',
        'Memória GDDR6X',
        'Clock de até 2.5 GHz',
        'Indicada para jogos em Quad HD'
      ],
      memoriaVideo: '12 GB',
      tipoMemoria: 'GDDR6X',
      clock: '2.5 GHz',
      fabricante: 'MATRIX'
    },

    
    // ============================================
    // FONTES
    // ============================================

    {
      id: 51,
      nome: 'Fonte MATRIX 450W',
      descricao: 'Fonte para computadores de entrada e uso doméstico.',
      preco: 229.90,
      imagem: '36.jpg',
      categoria: 'Fonte',
      detalhes: [
        'Potência de 450 W',
        'Certificação 80 Plus',
        'Não modular',
        'Bivolt'
      ],
      potencia: '450 W',
      certificacao: '80 Plus',
      modular: false,
      tensao: 'Bivolt'
    },

    {
      id: 52,
      nome: 'Fonte MATRIX 500W',
      descricao: 'Fonte eficiente para computadores intermediários.',
      preco: 279.90,
      imagem: '37.jpg',
      categoria: 'Fonte',
      detalhes: [
        'Potência de 500 W',
        'Certificação 80 Plus Bronze',
        'Não modular',
        'Bivolt'
      ],
      potencia: '500 W',
      certificacao: '80 Plus Bronze',
      modular: false,
      tensao: 'Bivolt'
    },

    {
      id: 53,
      nome: 'Fonte MATRIX 550W Bronze',
      descricao: 'Fonte confiável para computadores gamers de entrada.',
      preco: 329.90,
      imagem: '38.jpg',
      categoria: 'Fonte',
      detalhes: [
        'Potência de 550 W',
        'Certificação 80 Plus Bronze',
        'Não modular',
        'Bivolt'
      ],
      potencia: '550 W',
      certificacao: '80 Plus Bronze',
      modular: false,
      tensao: 'Bivolt'
    },

    {
      id: 54,
      nome: 'Fonte MATRIX 600W Bronze',
      descricao: 'Fonte para setups gamers de médio desempenho.',
      preco: 379.90,
      imagem: '39.jpg',
      categoria: 'Fonte',
      detalhes: [
        'Potência de 600 W',
        'Certificação 80 Plus Bronze',
        'Cabos reforçados',
        'Bivolt'
      ],
      potencia: '600 W',
      certificacao: '80 Plus Bronze',
      modular: false,
      tensao: 'Bivolt'
    },

    {
      id: 55,
      nome: 'Fonte MATRIX 650W Gold',
      descricao: 'Fonte de alta eficiência para computadores gamers.',
      preco: 449.90,
      imagem: '40.jpg',
      categoria: 'Fonte',
      detalhes: [
        'Potência de 650 W',
        'Certificação 80 Plus Gold',
        'Semi modular',
        'Bivolt'
      ],
      potencia: '650 W',
      certificacao: '80 Plus Gold',
      modular: true,
      tensao: 'Bivolt'
    },

    

        // ============================================
    // SSDs
    // ============================================

    {
      id: 61,
      nome: 'SSD MATRIX 240GB SATA',
      descricao: 'SSD compacto para sistema operacional e tarefas básicas.',
      preco: 149.90,
      imagem: '41.jpg',
      categoria: 'SSD',
      detalhes: [
        'Capacidade de 240 GB',
        'Interface SATA',
        'Leitura de até 520 MB/s',
        'Gravação de até 450 MB/s'
      ],
      capacidade: '240 GB',
      tipo: 'SATA',
      leitura: '520 MB/s',
      gravacao: '450 MB/s'
    },

    {
      id: 62,
      nome: 'SSD MATRIX 480GB SATA',
      descricao: 'SSD para melhorar o desempenho de computadores e notebooks.',
      preco: 229.90,
      imagem: '42.jpg',
      categoria: 'SSD',
      detalhes: [
        'Capacidade de 480 GB',
        'Interface SATA',
        'Leitura de até 550 MB/s',
        'Gravação de até 500 MB/s'
      ],
      capacidade: '480 GB',
      tipo: 'SATA',
      leitura: '550 MB/s',
      gravacao: '500 MB/s'
    },

    {
      id: 63,
      nome: 'SSD MATRIX 500GB NVMe',
      descricao: 'SSD NVMe rápido para jogos, programas e sistema operacional.',
      preco: 299.90,
      imagem: '43.jpg',
      categoria: 'SSD',
      detalhes: [
        'Capacidade de 500 GB',
        'NVMe M.2',
        'Leitura de até 3000 MB/s',
        'Gravação de até 2500 MB/s'
      ],
      capacidade: '500 GB',
      tipo: 'NVMe M.2',
      leitura: '3000 MB/s',
      gravacao: '2500 MB/s'
    },

    {
      id: 64,
      nome: 'SSD MATRIX 1TB SATA',
      descricao: 'SSD de alta capacidade para arquivos, programas e jogos.',
      preco: 349.90,
      imagem: '44.jpg',
      categoria: 'SSD',
      detalhes: [
        'Capacidade de 1 TB',
        'Interface SATA',
        'Leitura de até 560 MB/s',
        'Gravação de até 520 MB/s'
      ],
      capacidade: '1 TB',
      tipo: 'SATA',
      leitura: '560 MB/s',
      gravacao: '520 MB/s'
    },

    {
      id: 65,
      nome: 'SSD MATRIX 1TB NVMe',
      descricao: 'SSD NVMe de alta velocidade para computadores modernos.',
      preco: 449.90,
      imagem: '45.jpg',
      categoria: 'SSD',
      detalhes: [
        'Capacidade de 1 TB',
        'NVMe M.2',
        'Leitura de até 5000 MB/s',
        'Gravação de até 4200 MB/s'
      ],
      capacidade: '1 TB',
      tipo: 'NVMe M.2',
      leitura: '5000 MB/s',
      gravacao: '4200 MB/s'
    },

    

    // ============================================
    // MONITORES
    // ============================================

    {
      id: 71,
      nome: 'Monitor MATRIX 21.5 Full HD',
      descricao: 'Monitor compacto para estudos, trabalho e uso diário.',
      preco: 699.90,
      imagem: '46.jpg',
      categoria: 'Monitor',
      detalhes: [
        '21.5 polegadas',
        'Resolução Full HD',
        '75 Hz',
        '5 ms',
        'HDMI e VGA'
      ],
      tamanhoTela: '21.5 polegadas',
      resolucao: '1920x1080 Full HD',
      taxaAtualizacao: '75 Hz',
      tempoResposta: '5 ms',
      conexoes: 'HDMI e VGA'
    },

    {
      id: 72,
      nome: 'Monitor MATRIX 24 Full HD',
      descricao: 'Monitor de 24 polegadas para trabalho e entretenimento.',
      preco: 849.90,
      imagem: '47.jpg',
      categoria: 'Monitor',
      detalhes: [
        '24 polegadas',
        'Resolução Full HD',
        '75 Hz',
        '4 ms',
        'HDMI e DisplayPort'
      ],
      tamanhoTela: '24 polegadas',
      resolucao: '1920x1080 Full HD',
      taxaAtualizacao: '75 Hz',
      tempoResposta: '4 ms',
      conexoes: 'HDMI e DisplayPort'
    },

    {
      id: 73,
      nome: 'Monitor MATRIX 24 Gamer 144Hz',
      descricao: 'Monitor gamer com alta taxa de atualização e resposta rápida.',
      preco: 1099.90,
      imagem: '48.jpg',
      categoria: 'Monitor',
      detalhes: [
        '24 polegadas',
        'Resolução Full HD',
        '144 Hz',
        '1 ms',
        'HDMI e DisplayPort'
      ],
      tamanhoTela: '24 polegadas',
      resolucao: '1920x1080 Full HD',
      taxaAtualizacao: '144 Hz',
      tempoResposta: '1 ms',
      conexoes: 'HDMI e DisplayPort'
    },

    {
      id: 74,
      nome: 'Monitor MATRIX 24 Gamer 165Hz',
      descricao: 'Monitor gamer para jogos competitivos e alta fluidez.',
      preco: 1299.90,
      imagem: '49.jpg',
      categoria: 'Monitor',
      detalhes: [
        '24 polegadas',
        'Resolução Full HD',
        '165 Hz',
        '1 ms',
        'HDMI e DisplayPort'
      ],
      tamanhoTela: '24 polegadas',
      resolucao: '1920x1080 Full HD',
      taxaAtualizacao: '165 Hz',
      tempoResposta: '1 ms',
      conexoes: 'HDMI e DisplayPort'
    },

    {
      id: 75,
      nome: 'Monitor MATRIX 27 Full HD',
      descricao: 'Monitor de 27 polegadas para produtividade e entretenimento.',
      preco: 1199.90,
      imagem: '50.jpg',
      categoria: 'Monitor',
      detalhes: [
        '27 polegadas',
        'Resolução Full HD',
        '100 Hz',
        '4 ms',
        'HDMI e DisplayPort'
      ],
      tamanhoTela: '27 polegadas',
      resolucao: '1920x1080 Full HD',
      taxaAtualizacao: '100 Hz',
      tempoResposta: '4 ms',
      conexoes: 'HDMI e DisplayPort'
    
    }

    ];

  constructor(
  private cestaService: CestaService,
  private cd: ChangeDetectorRef
) {

}


  filtrarCategoria(categoria: string) {

    this.categoriaSelecionada = categoria;

  }


  get produtosFiltrados() {

    let lista = this.produtos;

    if (this.categoriaSelecionada !== 'Todos') {

      lista = lista.filter(
        produto =>
          produto.categoria === this.categoriaSelecionada
      );

    }

    if (this.pesquisa.trim() !== '') {

      lista = lista.filter(
        produto =>
          produto.nome
            .toLowerCase()
            .includes(
              this.pesquisa.toLowerCase()
            )
      );

    }

    return lista;

  }

  formatarPreco(valor: number) {

  return valor.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  );

}
  comprar(produto: Produto) {

  this.cestaService.adicionarProduto(produto);

  this.mensagemCarrinho =
    produto.nome + ' adicionado ao carrinho!';


  setTimeout(() => {

    this.mensagemCarrinho = '';

    this.cd.detectChanges();

  }, 2500);

}


  abrirDetalhes(produto: Produto) {

    this.produtoSelecionado = produto;

  }


  fecharDetalhes() {

    this.produtoSelecionado = null;

  }

}