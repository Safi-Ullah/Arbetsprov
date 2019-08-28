import React, { useState, useEffect } from 'react';
import { Enums } from '../components/constants';

export const withLogic = WrappedComponent => props => {

    const [newTask, setNewTask] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(-1);
    const [showConfirmationDialog, setConfirmationDialogVisibility] = useState(false);
    const [showEditTaskModal, setEditTaskModalVisibility] = useState(false);
    const [selectedScreen, setSelectedScreen] = useState(Enums.APP_SCREENS.dashboard);

    useEffect(() => {
        if (!tasks) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            setTasks(tasks);
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const displayConfirmationDialog = taskId => {
        setConfirmationDialogVisibility(true);
        setSelectedTaskId(taskId);
    };

    const displayEditTaskModal = taskId => {
        setEditTaskModalVisibility(true);
        setSelectedTaskId(taskId);
        setNewTask({...tasks.find(task => task.id === taskId)});
    };

    const hideConfirmationDialog = () => setConfirmationDialogVisibility(false);

    const hideEditTaskModal = () => {
        setEditTaskModalVisibility(false);
        setNewTask(null);
    };

    const addTask = event => {
        event.preventDefault();
        if (newTask) {
            const updatedTasks = [...tasks];
            updatedTasks.push(newTask);

            setTasks(updatedTasks);
            setNewTask(null);
        }
    };

    const removeTask = event => {
        event.preventDefault();

        setTasks(tasks.filter(task => task.id !== selectedTaskId));
        hideConfirmationDialog();
    };

    const editTask = () => {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(task => task.id === selectedTaskId);
        updatedTasks[index] = newTask;
        setTasks(updatedTasks);
        hideEditTaskModal();
    };

    const changeStatus = (taskId, status) => {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(task => task.id === taskId);
        updatedTasks[index].status = status;
        setTasks(updatedTasks);
    };

    return <WrappedComponent
        tasks={tasks}
        newTask={newTask}
        addTask={addTask}
        setNewTask={setNewTask}
        showConfirmationDialog={showConfirmationDialog}
        displayConfirmationDialog={displayConfirmationDialog}
        hideConfirmationDialog={hideConfirmationDialog}
        removeTask={removeTask}
        showEditTaskModal={showEditTaskModal}
        displayEditTaskModal={displayEditTaskModal}
        hideEditTaskModal={hideEditTaskModal}
        editTask={editTask}
        changeStatus={changeStatus}
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
        {...props} />;
};