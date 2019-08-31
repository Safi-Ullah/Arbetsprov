import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../navbar';
import { PromptMessages, Enums } from '../../constants';
import { ConfirmationDialog } from '../common';
import { EditTaskModal } from '../editTaskModal';
import { DisplayScreen } from '../displayScreen';

export const App = props => {

    const {
        addTask, setNewTask, newTask, tasks, removeTask, showConfirmationDialog,
        displayConfirmationDialog, hideConfirmationDialog, showEditTaskModal,
        displayEditTaskModal, hideEditTaskModal, editTask, changeStatus,
        selectedScreen, setSelectedScreen, tasksSortBy, toggleSorting
    } = props;

    return <div>
        <Navbar
            addTask={addTask}
            setSelectedScreen={setSelectedScreen}
            setNewTask={setNewTask}
            newTask={newTask} />
        <DisplayScreen
            tasksSortBy={tasksSortBy}
            toggleSorting={toggleSorting}
            displayConfirmationDialog={displayConfirmationDialog}
            displayEditTaskModal={displayEditTaskModal}
            selectedScreen={selectedScreen}
            tasks={tasks}
            changeStatus={changeStatus} />
        <ConfirmationDialog
            handleClose={hideConfirmationDialog}
            showModal={showConfirmationDialog}
            successCallback={removeTask}
            message={PromptMessages.DELETE_TASK_PROMPT} />
        <EditTaskModal
            task={newTask}
            setNewTask={setNewTask}
            editTask={editTask}
            showModal={showEditTaskModal}
            handleClose={hideEditTaskModal} />
    </div>
};

App.propTypes = {
    addTask: PropTypes.func,
    setNewTask: PropTypes.func,
    removeTask: PropTypes.func,
    showConfirmationDialog: PropTypes.bool,
    displayConfirmationDialog: PropTypes.func,
    hideConfirmationDialog: PropTypes.func,
    showEditTaskModal: PropTypes.bool,
    displayEditTaskModal: PropTypes.func,
    hideEditTaskModal: PropTypes.func,
    editTask: PropTypes.func,
    newTask: PropTypes.object,
    tasks: PropTypes.array,
    changeStatus: PropTypes.func,
    selectedScreen: PropTypes.number,
    setSelectedScreen: PropTypes.func,
    tasksSortBy: PropTypes.object,
    toggleSorting: PropTypes.func
};

App.defaultProps = {
    addTask: () => {},
    setNewTask: () => {},
    removeTask: () => {},
    showConfirmationDialog: false,
    displayConfirmationDialog: () => {},
    hideConfirmationDialog: () => {},
    showEditTaskModal: false,
    displayEditTaskModal: () => {},
    hideEditTaskModal: () => {},
    editTask: () => {},
    newTask: {},
    tasks: [],
    changeStatus: () => {},
    selectedScreen: Enums.APP_SCREENS.dashboard,
    setSelectedScreen: () => {},
    tasksSortBy: {},
    toggleSorting: () => {}
};