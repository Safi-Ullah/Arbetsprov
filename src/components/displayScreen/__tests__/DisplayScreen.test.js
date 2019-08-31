import React from 'react';
import TestRenderer from 'react-test-renderer';
import { DisplayScreen } from '../DisplayScreen';
import { Enums, DEFAULT_STATUS_SORT } from '../../../constants';

const props = {
    displayConfirmationDialog: jest.fn(),
    displayEditTaskModal: jest.fn(),
    selectedScreen: Enums.APP_SCREENS.dashboard,
    tasks: [],
    changeStatus: jest.fn(),
    tasksSortBy: DEFAULT_STATUS_SORT,
    toggleSorting: jest.fn()
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('on dashboard view without any tasks', () => {
        const tree = TestRenderer.create(<DisplayScreen {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('on deleted tasks view without any tasks', () => {
        props.selectedScreen = Enums.APP_SCREENS.deletedTasks;
        const tree = TestRenderer.create(<DisplayScreen {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('on dashboard view with tasks', () => {
        props.tasks = [{
            title: 'test',
            desc: 'test',
            complexity: '0',
            assignee: 'test',
            status: Enums.TASK_STATUS.created
        }];
        const tree = TestRenderer.create(<DisplayScreen {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('on deleted tasks view with tasks', () => {
        props.tasks = [{
            title: 'test',
            desc: 'test',
            complexity: '0',
            assignee: 'test',
            status: Enums.TASK_STATUS.deleted
        }];
        props.selectedScreen = Enums.APP_SCREENS.deletedTasks;
        const tree = TestRenderer.create(<DisplayScreen {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});