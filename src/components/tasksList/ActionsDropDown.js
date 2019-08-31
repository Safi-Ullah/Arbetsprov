import React from 'react';
import PropTypes from 'prop-types';
import { Enums, TASK_ACTION_HANDLERS } from '../../constants';
import { getKeyFromValue } from '../../utils';

export const ActionsDropDown = props => {

    const { taskNextStatus, changeStatus, task } = props;

    const taskActions = { 'Edit': Enums.TASK_ACTIONS.edit };

    return <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {
            Object.keys(taskActions).map(action => <button
                key={taskActions[action]}
                onClick={() => props[TASK_ACTION_HANDLERS[taskActions[action]]](task.id)}
                className="dropdown-item">
                { action }
            </button>)
        }
        {
            taskNextStatus.length
                ? <React.Fragment>
                    <div className="dropdown-divider" />
                    <span className="dropdown-subheading">Change Status</span>
                </React.Fragment>
                : null
        }
        {
            taskNextStatus.map(status => <button
                key={status}
                onClick={() => changeStatus(task.id, status)}
                disabled={
                    (status === Enums.TASK_STATUS.active && !task.assignee) ||
                    (status === Enums.TASK_STATUS.completed && task.status !== Enums.TASK_STATUS.active)
                }
                className="dropdown-item text-capitalize">
                { getKeyFromValue(Enums.TASK_STATUS, status) }
            </button>)
        }
    </div>;
};

ActionsDropDown.propTypes = {
    task: PropTypes.object.isRequired,
    taskNextStatus: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired
};