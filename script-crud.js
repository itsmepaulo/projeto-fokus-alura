// encontrar o botão adicionar tarefa.
const adicionarTarefaBt = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');

const tarefas = [];

adicionarTarefaBt.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden'); //O toggle adiciona se não tiver e remove se tiver.
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa);
})