var button = document

function lerMensagem() {
  let mensagem = document.querySelector('textarea').value.split('')

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
}

function alterarTelaCriptografia() {
  let imagem = document.getElementsByClassName('img-criptografia')[0]
  let 
  if (document.querySelector('textarea').value.trim().length > 0){
    imagem.src = 'images/fox-g452e24e6a_640.png'
  }
  else imagem.src = 'images/fox-g8ef2924b6_640.png'
}
