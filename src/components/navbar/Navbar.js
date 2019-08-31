import React from 'react';
import PropTypes from 'prop-types';
import { Enums } from '../../constants';
import { getUniqueId } from '../../utils';

export const Navbar = ({ addTask, setNewTask,
    newTask, setSelectedScreen }) => <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <button
            className="btn btn-link navbar-brand"
            onClick={() => setSelectedScreen(Enums.APP_SCREENS.dashboard)}>
            Arbetsprov
        </button>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <button
                        className="btn btn-link nav-link"
                        onClick={() => setSelectedScreen(Enums.APP_SCREENS.deletedTasks)}>
                        Deleted Tasks
                    </button>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"
                    placeholder="Add Task"
                    value={newTask ? newTask.title : ''}
                    onChange={event => setNewTask({
                        id: getUniqueId(),
                        title: event.target.value,
                        status: Enums.TASK_STATUS.created,
                        complexity: "0"
                    })}
                    aria-label="Add Task" />
                <button className="btn btn-outline-secondary my-2 my-sm-0"
                    onClick={addTask}>
                    Add
                </button>
            </form>
        </div>
    </nav>;

Navbar.propTypes = {
    addTask: PropTypes.func.isRequired,
    setNewTask: PropTypes.func.isRequired,
    newTask: PropTypes.object.isRequired,
    setSelectedScreen: PropTypes.func.isRequired
};