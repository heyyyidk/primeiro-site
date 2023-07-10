//passo 1 - pegar os membros no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const membros = document.querySelectorAll('.membro');

//passo 2 - adicionar a classe selecionada no membro que o usuário passar o cursor do mouse

membros.forEach((membro) => {
    membro.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        
        //passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

        
        removerSelecaoDoMembro();

        
        membro.classList.add('selecionado');

        // passo 1
        const imagemMembroGrande = document.querySelector('.membro-grande');

        // passo 2
        const idMembro = membro.attributes.id.value;
        imagemMembroGrande.src = `./src/imagens/${idMembro}.jpg`;

        // passo 3
        const nomeMembro = document.getElementById('nome-membro');
        nomeMembro.innerText = membro.getAttribute('data-name');

        // passo 4
        const descricaoMembro = document.getElementById('descricao-membro');
        descricaoMembro.innerText = membro.getAttribute('data-description');




        


    })
})






function removerSelecaoDoMembro() {
    const membroSelecionado = document.querySelector('.selecionado');
    membroSelecionado.classList.remove('selecionado');
}

