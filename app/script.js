const btnContato = document.querySelector('#header__contato');
const listaContato = document.querySelector('#contatos');


btnContato.addEventListener('click', () => {
    if (listaContato.style.display === 'none') {
        listaContato.style.display = 'block';
    } else {
        listaContato.style.display = 'none';
    }
})
