import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapModal } from '../common';

export const EditTaskModal = props => {

    const { showModal, handleClose, task, setNewTask, editTask } = props;

    return <BootstrapModal
        handleClose={handleClose}
        showModal={showModal}
        heading="Edit Task">
        <div className="modal-body">
            <form>
                <div className="form-group">
                    <label htmlFor="taskTitle">Title</label>
                    <input
                        className="form-control"
                        value={task ? task.title : ''}
                        id="taskTitle"
                        placeholder="Title"
                        onChange={event => setNewTask({...task, title: event.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDesc">Description</label>
                    <textarea
                        value={task ? task.desc : ''}
                        className="form-control"
                        id="taskDesc"
                        rows="3"
                        onChange={event => setNewTask({...task, desc: event.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="taskComplexity">Complexity</label>
                    <select
                        className="form-control"
                        value={task ? task.complexity : null}
                        id="taskComplexity"
                        onChange={event => setNewTask({ ...task, complexity: event.target.value })}>
                        { [...Array(11).keys()].map(index => <option key={index}>{ index }</option>) }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="taskAssignee">Assignee</label>
                    <input
                        className="form-control"
                        value={task ? task.assignee : ''}
                        id="taskAssignee"
                        placeholder="Assignee"
                        onChange={event => setNewTask({...task, assignee: event.target.value})} />
                </div>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={editTask}>
                Save
            </button>
        </div>
    </BootstrapModal>;
};

EditTaskModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    task: PropTypes.object,
    setNewTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
};

EditTaskModal.defaultProps = {
    task: null
};