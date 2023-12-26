const imagens = ['imagem1', 'imagem2', 'imagem3', 'imagem4'];
let indiceImagemAtual = 0;

function handleInputChange() {
    const inputFotos = document.getElementById('inputFotos');
    const arquivos = inputFotos.files;

    // Verificar se há um arquivo e uma imagem correspondente
    if (arquivos.length > 0) {
        const imagemAtual = document.getElementById(imagens[indiceImagemAtual]);
        const novaImagem = URL.createObjectURL(arquivos[0]);
        imagemAtual.src = novaImagem;

        // Salvar a URL da imagem no Local Storage
        localStorage.setItem(`imagem${indiceImagemAtual + 1}`, novaImagem);

        // Incrementar o índice para a próxima imagem ou reiniciar se atingir o limite
        indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    }

    // Limpar o valor do input para permitir o mesmo arquivo ser selecionado novamente
    inputFotos.value = null;
}

// Adicionar um ouvinte de eventos para o input de arquivo
const inputFotos = document.getElementById('inputFotos');
inputFotos.addEventListener('change', handleInputChange);

// Adicionar um ouvinte de eventos para o botão
const btnCarregar = document.getElementById('btnCarregar');
btnCarregar.addEventListener('click', function () {
    // Simular o clique no input de arquivo
    inputFotos.click();
});

function limparCampos() {
    const camposTexto = ['nome', 'datanascimento', 'pelagem', 'inclusao', 'registro'];
    const selects = ['local', 'sexo', 'situacao'];
    const textarea = ['resenha'];

    // Limpar campos de texto
    camposTexto.forEach(campo => {
        document.getElementById(campo).value = '';
    });

    // Limpar selects
    selects.forEach(select => {
        document.getElementById(select).selectedIndex = 0;
    });

    // Limpar textarea
    textarea.forEach(area => {
        document.getElementById(area).value = '';
    });

    // Limpar imagens
   /* for (let i = 0; i < 4; i++) {
        const imagemAtual = document.getElementById(`imagem${i + 1}`);
        imagemAtual.src = '';
        localStorage.removeItem(`imagem${i + 1}`);
    }*/

   location.reload(); //reinicia a página carregando as imagens padrão 
    
}

// Adicionar um ouvinte de eventos para o botão Limpar Dados
const btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', limparCampos);