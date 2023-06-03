const form = document.getElementById('novoItem')
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];

  criarElemento(nome.value, quantidade.value)

  nome.value="";
  quantidade.value="";
})


function criarElemento(nome, quantidade) {
  // <li class="item"><strong>10</strong>Cuecas</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

   lista.appendChild(novoItem);

   const itemAtual = {
    'nome': nome,
    'quantidade': quantidade
   }

   itens.push(JSON.stringify(itemAtual));

   localStorage.setItem('itens', itens);
}