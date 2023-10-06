// Método simples para adicionar o título
const titulo = document.createElement('h1');
titulo.textContent = 'Título do Site';
titulo.id = 'titulo';
document.body.appendChild(titulo);

// Método complexo para adicionar o elemento de produto
const produto = document.createElement('div');
produto.classList.add('produto');

const nome = document.createElement('h2');
nome.textContent = 'Nome do Produto';
produto.appendChild(nome);

const descricao = document.createElement('p');
descricao.textContent = 'Descrição do Produto';
produto.appendChild(descricao);

const preco = document.createElement('p');
preco.textContent = 'Preço: R$99,99';
produto.appendChild(preco);

document.body.appendChild(produto);
