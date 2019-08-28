import React from 'react';
import PropTypes from 'prop-types';
import { Enums } from '../constants';
import { TasksList } from '../tasksList';

export const DisplayScreen = props => {

    const {
        displayConfirmationDialog, displayEditTaskModal,
        selectedScreen, tasks, changeStatus
    } = props;

    let statusToDisplay = Object.keys(Enums.TASK_STATUS);

    if (selectedScreen === Enums.APP_SCREENS.dashboard)
        statusToDisplay = statusToDisplay.filter(status => Enums.TASK_STATUS[status] !== Enums.TASK_STATUS.deleted);
    else
        statusToDisplay = statusToDisplay.filter(status => Enums.TASK_STATUS[status] === Enums.TASK_STATUS.deleted);

    return <div className="container">
        <div className="row main-screen">
            {
                tasks ? statusToDisplay.map((status, index) => <div key={index} className="col-sm">
                    <h6 className="text-center mt-2 text-capitalize">{ status }</h6>
                    <TasksList
                        changeStatus={changeStatus}
                        displayEditTaskModal={displayEditTaskModal}
                        status={Enums.TASK_STATUS[status]}
                        tasks={tasks.filter(task => task.status === Enums.TASK_STATUS[status])}
                        displayConfirmationDialog={displayConfirmationDialog}/>
                </div>
                ) : null
            }
        </div>
    </div>;
};

DisplayScreen.propTypes = {
    displayConfirmationDialog: PropTypes.func.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired,
    selectedScreen: PropTypes.number.isRequired,
    tasks: PropTypes.array,
    changeStatus: PropTypes.func.isRequired
};

DisplayScreen.defaultProps = {
    tasks: []
};