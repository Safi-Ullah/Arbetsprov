import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TasksList } from '../TasksList';
import { Enums } from '../../../constants';

const props = {
    tasks: [],
    displayConfirmationDialog: jest.fn(),
    displayEditTaskModal: jest.fn(),
    status: Enums.TASK_STATUS.created,
    changeStatus: jest.fn()
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('show taskslist without any tasks', () => {
        const tree = TestRenderer.create(<TasksList {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('show taskslist with tasks', () => {
        props.tasks = [{
            title: 'test',
            desc: 'test',
            complexity: '0',
            assignee: 'test',
            status: Enums.TASK_STATUS.created
        }];
        const tree = TestRenderer.create(<TasksList {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});