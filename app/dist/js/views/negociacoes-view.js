import { View } from "./view.js";
export class NegociacoesView extends View {
    template(modelo) {
        return `
            <table class="table table-hover table-bordered"
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th> 
                    </tr>
                <thead>
                <tbody>
                ${modelo.listagem().map(itemNegociado => {
            return `
                  <tr>
                    <td>${this.converterData(itemNegociado.data)}</td>
                    <td>${itemNegociado.quantidade}</td>
                    <td>${itemNegociado.valor}</td>
                  </tr>
                  `;
        }).join('')}
                </tbody>
                <script>alert('oi')</script>
            </table>
        `;
    }
    converterData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
