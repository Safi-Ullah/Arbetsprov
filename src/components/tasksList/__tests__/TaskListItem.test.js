import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TaskListItem } from '../TaskListItem';
import { Enums } from '../../../constants';

const props = {
    task: {
        title: 'test',
        desc: 'test',
        complexity: '0',
        assignee: 'test',
        status: Enums.TASK_STATUS.created
    },
    displayConfirmationDialog: jest.fn(),
    displayEditTaskModal: jest.fn(),
    taskNextStatus: [],
    changeStatus: jest.fn()
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('show taskslist item', () => {
        const tree = TestRenderer.create(<TaskListItem {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});