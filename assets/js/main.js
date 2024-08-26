document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('textarea')
    const result = document.querySelector('.result')

    const btnEncriptar = document.querySelector('#encriptar')
    const btnDesencriptar = document.querySelector('#desencriptar')
    const btnCopiar = document.querySelector('#copiar')

    btnEncriptar.addEventListener('click', function (e) {
        e.preventDefault()
        const textValue = text.value

        if (_validateSpecialcharacters(textValue)) {
            alert('No se permiten caracteres especiales')
        } else {
            const resultValue = textValue
                .toLowerCase()
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat')

            _insertResult(resultValue)
        }
    })

    btnDesencriptar.addEventListener('click', function (e) {
        e.preventDefault()
        const textValue = text.value

        if (_validateSpecialcharacters(textValue)) {
            alert('No se permiten caracteres especiales')
        } else {
            const resultValue = textValue
                .toLowerCase()
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u')

            _insertResult(resultValue)
        }
    })

    btnCopiar.addEventListener('click', function (e) {
        e.preventDefault()
        const textValue = result.querySelector('p').innerHTML
        _copyToClipboard(textValue)
    })
})

function _insertResult(resultValue) {
    const result = document.querySelector('.result')
    const noResults = document.querySelector('.no-results')

    if (resultValue.length === 0) {
        result.classList.add('d-none')
        noResults.classList.remove('d-none')
    } else {
        result.querySelector('p').innerHTML = resultValue
        result.classList.remove('d-none')
        noResults.classList.add('d-none')
    }
}

function _copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    const btnCopiar = document.querySelector('#copiar')

    btnCopiar.innerHTML = 'Copiado!'

    setTimeout(function () {
        btnCopiar.innerHTML = 'Copiar'
    }, 2000)
}

function _validateSpecialcharacters(text) {
    const specialCharacters = /[^\w\s!]|[áéíóúÁÉÍÓÚñÑüÜ]/g

    return text.match(specialCharacters) ? true : false
}
