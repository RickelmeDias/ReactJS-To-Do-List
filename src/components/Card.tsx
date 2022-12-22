import styles from './Card.module.css';
import checklistEmptySvg from '../assets/checklist.svg';
import checklistCheckedSvg from '../assets/checklist-checked.svg';

import { Trash } from 'phosphor-react'

interface ITask {
    id: string,
    done: boolean,
    name: string,
    taskDoneChanger: any
    deleteTask: any
}

export function Card({id, done, name, taskDoneChanger, deleteTask}: ITask) {    

    function handleCheckbox() {
        taskDoneChanger(id);
    }

    function handleDeleteTask() {
        deleteTask(id);
    }

    return (
        <div className={(done) ? styles.containerDone : styles.container}>
            <button className={styles.buttonCheck} onClick={handleCheckbox}>
                {(done) ? (<img src={checklistCheckedSvg}/>) : (<img src={checklistEmptySvg}/>)}
            </button>
            <p className={styles.nameBox}>{name}</p>
            <button className={styles.buttonCheck} onClick={handleDeleteTask}>
                <Trash size={18} />
            </button>
        </div>
    )
}