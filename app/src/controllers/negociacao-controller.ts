import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
import { TodasNegociacoes } from "../models/TodasNegociacoes.js";
//_________________________PARTE 2____________________
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

//_________________________PARTE 3____________________
import { logarTempoDeExecucacao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacoesAPI } from "../interfaces/negociacao-do-dia.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { Imprimir } from "../utils/imprimir.js";

//Exporing the main class
export class NegociacaoController {
    //Assim que ela for instanciada
    //ter o input da data, quantidade e valor

    //Eu preciso colocar o HTMLInputElement, pois o tipo da variável só é definida no construtor. 
    //Poderia ser feita assim === private inputData = 'nome';
    
    @domInjector('#data')
    private inputData: HTMLInputElement;
    
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    //Propriedade criada no módulo 4. Arquivo 'negocicoes.ts'
    // private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesTodas = new TodasNegociacoes()
    //_________________________PARTE 2____________________
    // private negociacoesView = new NegociacoesView('#negociacoesView', true); ___Antes do decorator escape
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    // _________PART 3_________
    private negociacoesService = new NegociacoesService

    //É melhor usar o enumeration para todar essas constancias de uso universais
    // private readonly SABADO = 6;
    // private readonly DOMINGO = 0

    //Pega os dados dos inputs do HTML
    //Não precisa de argumentos, já que a classe serve para chamar outras funções dentro dela
    //Se houver argumento, o TS vai pedir tais argumento na parte de app.ts

    //Argumento são necessários na hora de chamar a função/classe

    //Quando a classe NegociacaoController for chamada, ela usará o 'constructor' para pegar os dados
    constructor() {
        // A maaneira mais recomendada é a de baixo
        // Antes do decorator dom-injector
        
        // this.inputData = <HTMLInputElement> document.querySelector('#data');
        // this.inputData = document.querySelector('#data') as HTMLInputElement;
        // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        
        //_________________________PARTE 2____________________
        // this.negociacoesView.template();
        this.negociacoesView.atualizaTela(this.negociacoesTodas);

    }

    // adiciona() {
    //     const negociacao = new Negociacao(
    //         this.inputData.value,
    //         this.inputQuantidade.value,
    //         this.inputValor.value,
    //     );
    //     console.log(negociacao);
    // }

    // adiciona() {
    //     const exp = /-/g;

    //     const date = new Date(this.inputData.value.replace(exp, ','));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);

    //     const negociacao = new Negociacao(date, quantidade, valor);
    //     console.log(negociacao);
    // }

    //____________Organizing the code above, to make it more clear___________

    private pegaValor(): NegociacaoFeita {
        //Tipando também o método para garantir que ele sempre volte negociacao
        //E não outro valor que eu coloque por acidente
        const exp = /-/g;

        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoFeita(date, quantidade, valor);
    
    }

    
    @inspect()
    @logarTempoDeExecucacao()
    public adiciona(): void {
        // _________PART 3_________
        // const t1 = performance.now();

        // const trader = this.pegaValor();
        // const negociacaoString = new NegociacaoFeita(null, 0, 0);
        const trader = NegociacaoFeita.pegaString(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        )

        //______________________________________PARTE 2___________________
        if (!this.ehDiautil(trader.data)) {
            this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas')
            return
        }

        this.negociacoesTodas.adicionaTrade(trader) 
        
        //________Parte 3_______
        // Antes de definir o imprimir com o tipo Imprimivel, issso aqui dá erro
        // const x = 'Ei'
        // Imprimir(trader, this.negociacoesTodas, x)
        Imprimir(trader, this.negociacoesTodas)
 
 
        // console.log(trader.exibeConsole());
        // console.log(this.negociacoesTodas.exibeConsole());


        //Antes dos métodos exibeConsole
            // console.log(`
            //     Data: ${trader.data},
            //     Quantidade: ${trader.quantidade},
            //     Valor: ${trader.valor},
            // `);

            // console.log(JSON.stringify(this.negociacoesTodas, null, 2));
        //________Parte 3 até aqui_______
        

        //Teste
        // const novaData = trader.data.setTime(10)
        // console.log(this.negociacoesTodas.listagem()); 
        // this.negociacoes.listagem().pop();

        this.limparFormulario()
        this.atualizaView();

        // const t2 = performance.now();
        // console.log(`Tempo de execução do método adiciona: ${(t2-t1)/1000} segundos` );

        //______________________________________PARTE 2___________________
        //Atualizando a tela com a string da lista de negociações usando o template string
        //Separando a responsabilidade, centralizando as atualizações da view. Movi esses métodos para 'atualizaView'
        // this.negociacoesView.atualizaTela(this.negociacoesTodas);
        // this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
        // this.negociacoesView.atualizaTela(this.negociacoesTodas);

        // if (trader.data.getDay() > 0 && trader.data.getDay() < 6 ) {
        // Constante se coloca em letra maíuscula
        // if (trader.data.getDay() > this.DOMINGO && trader.data.getDay() < this.SABADO ) {
        //     this.negociacoesTodas.adicionaTrade(trader)

        //     this.limparFormulario()
        //     this.atualizaView();

        // } else {
        //     this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas')

        // }
        
        //_________________________PARTE 2 - Cap.3____________________
        //Fazendo a negociação ser inserida até se for por um arquivo de texto
       

    }

    //________Parte 3_______
    public importarDados(): void {
        // O service faz tudo que ta comentado aí embaixo
        this.negociacoesService
        .obterNegociacoesDaApi()
        // Agora o TS sabe que o RETORNO DO MAP, obviamente é um ARRAY, agora vem até AutoComplete
         .then(negociacaoesDeAPI => { //Para cada item retornado do map
            for (let negociacaoMap of negociacaoesDeAPI){ //Variável criada a partir de cada item dentro da API do map
                this.negociacoesTodas.adicionaTrade(negociacaoMap) //Chamando o método de adicionar para cada item do MAP
            }
            this.negociacoesView.atualizaTela(this.negociacoesTodas) //Agora, para cada negociação criada acima, vai mmandar pra view
            
            
        });

        
        // ___________ISSO TUDO AQUI_____________________
        // Antes da Promise, se fazia o fetch aqui. Mandei para lá para caso os dados seja reutilizados 
        // fetch('http://localhost:8080/dados')
        //     // .then(resposta => {
            //     //     return resposta.json();
            //     //Mesma coisa disso
            //     .then(resposta => resposta.json()) //Tenho certeza que o retorno eu posso transformar para JSON. E O RESULTADO DISSO, VAI DIRETO PARA A PRÓXIMA CHAMADA ENCADEADA DO .then
            //     // .then((dados: Array<any>) =>{
                //         //Sem interface
                //     // .then((dados: any[]) =>{
                    //         //Com interface, para certificar que os nomes de 'vezes' e 'montante' da API serão chamados corretamente
                    //     .then((dados: NegociacoesAPI[]) =>{
                        //         // O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
                        //         // The Array.map() method creates a new array from the results of calling a function for every element.
                        
                        //         // A API não dá a data, é sempre a data de hoje. Então tenho que definir, e passar as vezes e o montante da API
                        //         //Já que eu coloquei que é um array ali em cima, o TS me mostra os métodos de array (map)
                        //         return dados.map(dadosDeHoje => { ; //O map retorna dados convertidos para uma INSTANCIA DE NEGOCIAÇÃO do dia de hoje. E agora vem um forEach com outro .then
                        //              return new NegociacaoFeita(
                            //                 new Date(), //Data
                            //                 dadosDeHoje.vezes, //Quantidade 
                            //                 dadosDeHoje.montante) //Valor
                            
                            //         // Já que é um JSON, esse código já vai vim com valores tipo Number, então não precisa de uma função pegaString, no arquivo NegociacaoFeita.ts
                            //         })
                            
                            //     })
                            
        // ___________ISSO TUDO ATÉ AQUI, E AÍ REPETE O PROCESSO LÁ DE CIMA_____________________
        // .then(negociacaoesDeAPI => { //Para cada item retornado do map
        //     for (let negociacaoMap of negociacaoesDeAPI){ //Variável criada a partir de cada item dentro da API do map
        //         this.negociacoesTodas.adicionaTrade(negociacaoMap) //Chamando o método de adicionar para cada item do MAP
        //     }
        //     this.negociacoesView.atualizaTela(this.negociacoesTodas) //Agora, para cada negociação criada acima, vai mmandar pra view
            
            
        // });
            
    }
                        
    //________Parte 2_______
    private ehDiautil(data: Date) {
        // return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO
        return data.getDay() > DiasDaSemana.DOMINGO && 
                data.getDay() < DiasDaSemana.SABADO

    }

    //Limpa o formulário e dá foco no primeiro valor
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() :void {
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
        this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
    }

}
