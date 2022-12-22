import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import styles from './TaskInput.module.css'

export function TaskInput({addNewTask}: any) {
    const [name, setName] = useState('');

    function handleChange(event: any) {
        setName(event.target.value);
    }
    
    function handleCreateNewTask() {
        event?.preventDefault();
        addNewTask(name);
        setName('');
    }

    return (
        <form onSubmit={handleCreateNewTask}>
                <input type="text" 
                    placeholder="Adicione uma nova tarefa"
                    name="newTask"
                    id="newTask"
                    className={styles.newTaskInput}
                    onChange={handleChange}
                    value={name}
                    />
                <button type="submit">
                    Criar
                    <PlusCircle size={15} />
                </button>
        </form>
    )
}