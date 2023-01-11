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

  alert(mensagem.join(''))
}
