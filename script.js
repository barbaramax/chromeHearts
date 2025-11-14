// carrinho
var carrinho = document.querySelector('#itens-carrinho')
var btnCarrinho = document.querySelector('#btnComprar')
var btnLimpar = document.querySelector('#btnLimparCarrinho')
var divListaCarrinho = document.querySelector('#lista')
var itensCarrinho = []
var count = 0
var storedItems = localStorage.getItem('itensCarrinho')
if (storedItems) {
  itensCarrinho = JSON.parse(storedItems)
  count = itensCarrinho.length
}
if (carrinho) {
  carrinho.textContent = count
}
var obterProdutoSelecionado = function() {
  var nomeProduto = document.querySelector('#nomeProd')
  var precoProduto = document.querySelector('#precoProdMini')
  var seletorTamanho = document.querySelector('#tam')
  var imagemProduto = document.querySelector('.produto-img img')
  var produto = {
    nome: 'Produto',
    preco: 'R$ 0',
    tamanho: 'tam',
    imagem: ''
  }
  if (nomeProduto) {
    produto.nome = nomeProduto.textContent
  }
  if (precoProduto) {
    produto.preco = precoProduto.textContent
  }
  if (seletorTamanho) {
    produto.tamanho = seletorTamanho.value
  }
  if (imagemProduto) {
    produto.imagem = imagemProduto.src
  }
  return produto
}

var adicionarAoCarrinho = function(event) {
  event.preventDefault()
  var produto = obterProdutoSelecionado()
  count++
  if (carrinho) {
    carrinho.textContent = count
  }
  itensCarrinho.push(produto)
  localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho))
  alert(produto.nome + ' adicionado ao carrinho')
  window.location.href = 'carrinho.html'
}
var reiniciarCarrinho = function() {
  if (divListaCarrinho) {
    divListaCarrinho.innerHTML = ''
    if (itensCarrinho.length === 0) {
      var vazio = document.createElement('h2')
      vazio.textContent = 'Seu carrinho está vazio'
      vazio.classList.add('carrinho-vazio') 
      divListaCarrinho.appendChild(vazio)
    } 
    else {
      var lista = document.createElement('ul')
      lista.classList.add('carrinho-lista') 
      for (var i = 0; i < itensCarrinho.length; i++) {
        var item = itensCarrinho[i]
        var li = document.createElement('li')
        li.classList.add('item-carrinho') 
        var foto = document.createElement('img')
        foto.src = item.imagem || '' 
        foto.alt = item.nome
        foto.classList.add('item-imagem') 
        var itemConteudo = document.createElement('div')
        itemConteudo.classList.add('item-detalhes') 
        itemConteudo.innerHTML = `<span class="item-nome">${item.nome}</span><br><span class="item-tamanho">Tamanho: ${item.tamanho}</span><br><span class="item-preco">${item.preco}</span>`
        li.appendChild(foto)
        li.appendChild(itemConteudo)
        lista.appendChild(li)
      }
      divListaCarrinho.appendChild(lista)
    }
  }
}

var limparCarrinho = function() {
    var confirmacao = confirm("Limpar o carrinho?")
    if (confirmacao) {
      localStorage.removeItem('itensCarrinho')
      itensCarrinho = []
      count = 0
      if (carrinho) {
        carrinho.textContent = 0
      }
      reiniciarCarrinho()
      alert("Carrinho limpo")
    }
}
if (btnCarrinho) {
  btnCarrinho.addEventListener('click', adicionarAoCarrinho)
}
reiniciarCarrinho()
if (btnLimpar) {
  btnLimpar.addEventListener('click', limparCarrinho)
}

//login
var login = document.querySelector('#login')
function entrar(){
  event.preventDefault()
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value
  if (email === '' || senha === '') {
    alert('Preencha o e-mail e a senha.')
    return
  }
  alert('Login realizado com sucesso!')
  window.location.href = 'produtos.html'
}

login.addEventListener('click', entrar)

//criar conta 
document.addEventListener('DOMContentLoaded', function() {
  var criar = document.getElementById("btnCriarConta")
    
  function cadastrar(event) {
    event.preventDefault()  
    var nome = document.getElementById('nome').value
    var tel = document.getElementById('tel').value
    var email = document.getElementById('emailC').value
    var senha = document.getElementById('senhaC').value
    if (email === '' || senha === '' || nome === '' || tel === '') {
      alert('Preencha todos os campos para criar sua conta.')
      return
    }   
    alert('Cadastro realizado com sucesso! Redirecionando...')
    window.location.href = 'produtos.html'
  }
  if (criar) {
    criar.addEventListener('click', cadastrar)
  }
})