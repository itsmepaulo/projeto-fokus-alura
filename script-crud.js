// encontrar o botão adicionar tarefa.
const adicionarTarefaBt = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');

const tarefas = []; //Lista de tarefas, por isso criado um array

adicionarTarefaBt.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden'); //O toggle adiciona se não tiver e remove se tiver.
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); //Evita a página carregar ao clicar para enviar.
    const tarefa = { //Objeto tarefa, ele vai capturar do textarea
        descricao: textarea.value
    }
    tarefas.push(tarefa); // Adiciona o objeto tarefa para o array tarefas.
    localStorage.setItem('tarefas', tarefas);
})