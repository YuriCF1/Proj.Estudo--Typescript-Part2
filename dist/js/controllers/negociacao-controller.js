import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
import { TodasNegociacoes } from "../models/TodasNegociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesTodas = new TodasNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
    }
    pegaValor() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoFeita(date, quantidade, valor);
    }
    adiciona() {
        const trader = NegociacaoFeita.pegaString(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiautil(trader.data)) {
            this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoesTodas.adicionaTrade(trader);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiautil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
        this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
    }
}
