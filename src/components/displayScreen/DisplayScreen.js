import React from 'react';
import PropTypes from 'prop-types';
import { Enums } from '../../constants';
import { TasksList } from '../tasksList';
import { sortDescending, sortAscending } from '../../utils';

export const DisplayScreen = props => {

    const {
        displayConfirmationDialog, displayEditTaskModal,
        selectedScreen, tasks, changeStatus, tasksSortBy, toggleSorting
    } = props;

    let statusToDisplay = Object.keys(Enums.TASK_STATUS);
    if (selectedScreen === Enums.APP_SCREENS.dashboard)
        statusToDisplay = statusToDisplay.filter(status => Enums.TASK_STATUS[status] !== Enums.TASK_STATUS.deleted);
    else
        statusToDisplay = statusToDisplay.filter(status => Enums.TASK_STATUS[status] === Enums.TASK_STATUS.deleted);

    return <div className="container">
        <div className="row main-screen">
            {
                tasks ? statusToDisplay.map((status, index) => {
                    const filteredTasks = tasks.filter(task => task.status === Enums.TASK_STATUS[status]);

                    tasksSortBy[status] === Enums.SORT_BY_COMPLEXITY.ascending
                        ? sortAscending(filteredTasks)
                        : sortDescending(filteredTasks);
                    return <div key={index} className="col-sm">
                        <div className="row">
                            <h6 className="text-center mt-2 text-capitalize col-sm-11">{status}</h6>
                            <span className="d-inline-block" tabIndex="0" title="Sort by complexity">
                                <button type="button" className="close col-sm-1" onClick={() => toggleSorting(status)}>
                                    {
                                        tasksSortBy[status] === Enums.SORT_BY_COMPLEXITY.ascending
                                            ? <span aria-hidden="true">&#9652;</span>
                                            : <span aria-hidden="true">&#9662;</span>
                                    }
                                </button>
                            </span>
                        </div>
                        <TasksList
                            changeStatus={changeStatus}
                            displayEditTaskModal={displayEditTaskModal}
                            status={Enums.TASK_STATUS[status]}
                            tasks={filteredTasks}
                            displayConfirmationDialog={displayConfirmationDialog} />
                    </div>;
                }) : null
            }
        </div>
    </div>;
};

DisplayScreen.propTypes = {
    displayConfirmationDialog: PropTypes.func.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired,
    selectedScreen: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
    tasksSortBy: PropTypes.object.isRequired,
    toggleSorting: PropTypes.func.isRequired
};