import styles from './ListTask.module.css';

import Clipboard from '../assets/Clipboard.svg';

import { TaskInput } from './TaskInput';
import { useState } from 'react';
import { Card } from './Card';
import { v4 as uuidv4 } from 'uuid';

interface ITask {
    id: string,
    done: boolean,
    name: string
}

export function ListTask() {
    const [tasks, setTasks] = useState<Array<ITask>>([
        {id: uuidv4(), done: true, name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: uuidv4(), done: false, name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: uuidv4(), done: false, name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}
    ]);
    
    function taskDoneCounter() {
        return tasks.reduce((total, t) => (t.done==true ? total+1 : total), 0);
    }

    function taskDoneChanger(id: string) {
        const updatedTesk = [...tasks];
        updatedTesk.filter(
          t => {
            if (t.id === id) {
                t.done = !t.done;
                setTasks(updatedTesk);
            }}
        );
    }

    function deleteTask(id: string) {
        const removedTask = tasks.filter(t => t.id !== id);
        setTasks(removedTask);
    }

    function addNewTask(name: string) {
        const newTask = {id: uuidv4(), done: false, name: name}
        setTasks([...tasks, newTask]);
    }

    
    return (
    <main>
        <TaskInput addNewTask={addNewTask} />
        <article className={styles.container}>
            <header className={styles.headerListTask}>
                <div>
                    <strong className={styles.blueStrong}>Tarefas criadas</strong>            
                    <div className={styles.counter}>{tasks.length}</div>
                </div>

                <div>
                    <strong className={styles.purpleStrong}>Concludias</strong>            
                    <div className={styles.counter}>{
                        (tasks.length <= 0) ? (0) : (
                            `${taskDoneCounter()} de ${tasks.length}`
                        )
                    }</div>
                </div>
            </header>
            <div className={styles.cards}>
                {(tasks.length <= 0) ? (
                <div className={styles.containerListTask}>
                    <div className={styles.notExistsTasks}>
                        <img src={Clipboard} />
                        <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <br />
                        Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>
                </div>) :
                    tasks.map((t) => 
                    <Card key={t.id} id={t.id} done={t.done} name={t.name} taskDoneChanger={taskDoneChanger} deleteTask={deleteTask} />
                )}
            </div>
        </article>
    </main>
    );
}