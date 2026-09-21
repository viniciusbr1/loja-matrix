import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  senha: string = '';
  mensagem: string = '';

  mostrarSenha: boolean = false;

  mostrarNovaSenha: boolean = false;
  mostrarConfirmarSenha: boolean = false;

  mostrarRecuperacao: boolean = false;

  etapaRecuperacao: number = 1;

  emailRecuperacao: string = '';

  codigoGerado: string = '';
  codigoDigitado: string = '';

  novaSenha: string = '';
  confirmarSenha: string = '';

  mensagemRecuperacao: string = '';


  entrar(form: any) {

    if (form.valid) {

      this.mensagem =
        'Login realizado com sucesso!';

    } else {

      this.mensagem =
        'Verifique os campos.';

    }

  }


  abrirRecuperacao() {

    this.mostrarRecuperacao = true;

    this.etapaRecuperacao = 1;

    this.emailRecuperacao = '';

    this.codigoGerado = '';

    this.codigoDigitado = '';

    this.novaSenha = '';

    this.confirmarSenha = '';

    this.mostrarNovaSenha = false;

    this.mostrarConfirmarSenha = false;

    this.mensagemRecuperacao = '';

  }


  fecharRecuperacao() {

    this.mostrarRecuperacao = false;

  }


  gerarCodigo() {

    if (
      this.emailRecuperacao !== '' &&
      this.emailRecuperacao.includes('@') &&
      this.emailRecuperacao.includes('.')
    ) {

      const numero =
        Math.floor(
          100000 +
          Math.random() * 900000
        );

      this.codigoGerado =
        numero.toString();

      this.etapaRecuperacao = 2;

      this.mensagemRecuperacao = '';

    } else {

      this.mensagemRecuperacao =
        'Digite um e-mail válido.';

    }

  }


  validarCodigo() {

    if (
      this.codigoDigitado !== '' &&
      this.codigoDigitado === this.codigoGerado
    ) {

      this.etapaRecuperacao = 3;

      this.mensagemRecuperacao = '';

    } else {

      this.mensagemRecuperacao =
        'Código inválido.';

    }

  }


  alterarSenha(form: any) {

    if (!form.valid) {

      return;

    }

    if (
      this.novaSenha !==
      this.confirmarSenha
    ) {

      this.mensagemRecuperacao =
        'As senhas não são iguais.';

      return;

    }

    this.etapaRecuperacao = 4;

    this.mensagemRecuperacao = '';

  }

}