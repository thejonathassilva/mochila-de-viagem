const form = document.getElementById('novoItem')
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(item => {
  criarElemento(item)
})

form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];
  
  const itemAtual = {
    'nome': nome.value,
    'quantidade': quantidade.value
   }

  criarElemento(itemAtual)

  nome.value="";
  quantidade.value="";
})


function criarElemento(item) {
  // <li class="item"><strong>10</strong>Cuecas</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;
  console.log(novoItem)

   lista.appendChild(novoItem);

   itens.push(item);

   localStorage.setItem('itens', JSON.stringify(itens));
}