const btnContato = document.querySelector('#header__contato');
const listaContato = document.querySelector('#contatos');

function toggleListaContato() {
    if (listaContato.style.display === 'none' || listaContato.style.display === '') {
        listaContato.style.display = 'block';
    } else {
        listaContato.style.display = 'none';
    }
}

btnContato.addEventListener('click', toggleListaContato);

btnContato.addEventListener('mouseenter', () => {
    listaContato.style.display = 'block';
});

btnContato.addEventListener('mouseleave', () => {
    listaContato.style.display = 'none';
});