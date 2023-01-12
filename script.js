var button = document

function criptografarMensagem() {
  let mensagem = document.querySelector('textarea').value.split('')
  if (mensagem.join()) {
    let caracteresParaAlterar = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < mensagem.length; i++) {
      for (let j = 0; j < caracteresParaAlterar.length; j++) {
        if (mensagem[i] == caracteresParaAlterar[j])
          if (caracteresParaAlterar[j] == 'a') mensagem[i] = 'ai'
          else if (caracteresParaAlterar[j] == 'e') mensagem[i] = 'enter'
          else if (caracteresParaAlterar[j] == 'i') mensagem[i] = 'imes'
          else if (caracteresParaAlterar[j] == 'o') mensagem[i] = 'ober'
          else if (caracteresParaAlterar[j] == 'u') mensagem[i] = 'ufat'
      }
    }
    mensagem = mensagem.join('')
    let imagem = document.getElementsByClassName('img-criptografia')[0]
    let informacoes = document.getElementsByTagName('p')

    imagem.style.display = 'none'
    for (let i = 1; i < informacoes.length - 1; i++) {
      informacoes[i].style.display = 'none'
      informacoes[i + 1].style.display = 'none'
    }
    let campoMensagem = document.getElementsByClassName('mensagem-criada')[0]
    campoMensagem.style.display = 'block'
    campoMensagem.innerHTML = mensagem
  }
}

function descriptografarMensagem() {
  let mensagem = document
    .querySelector('textarea')
    .value.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
  if (mensagem) {
    let imagem = document.getElementsByClassName('img-criptografia')[0]
    let informacoes = document.getElementsByTagName('p')

    imagem.style.display = 'none'
    for (let i = 1; i < informacoes.length - 1; i++) {
      informacoes[i].style.display = 'none'
      informacoes[i + 1].style.display = 'none'
    }
    let campoMensagem = document.getElementsByClassName('mensagem-criada')[0]
    campoMensagem.style.display = 'block'
    campoMensagem.innerHTML = mensagem
  }
}

function alterarTelaCriptografia() {
  let imagem = document.getElementsByClassName('img-criptografia')[0]
  let informacoes = document.getElementsByTagName('p')
  if (document.querySelector('textarea').value.trim().length > 0) {
    imagem.src = 'images/fox-g452e24e6a_640.png'
    for (let i = 2; i < informacoes.length - 1; i++) {
      informacoes[i].innerHTML = '...............'
      informacoes[i + 1].innerHTML = ''
    }
  } else {
    imagem.src = 'images/fox-g8ef2924b6_640.png'
    for (let i = 2; i < informacoes.length - 1; i++) {
      informacoes[i].innerHTML = 'Nenhuma mensagem encontrada'
      informacoes[i + 1].innerHTML =
        'Digite o texto que você deseja criptografar ou descriptografar'
    }
  }
}
