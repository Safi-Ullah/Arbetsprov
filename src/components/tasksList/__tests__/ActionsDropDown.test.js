import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ActionsDropDown } from '../ActionsDropDown';
import { Enums } from '../../../constants';

const props = {
    task: {
        id: 1,
        title: 'test',
        desc: 'test',
        complexity: '0',
        assignee: 'test',
        status: Enums.TASK_STATUS.created
    },
    taskNextStatus: [],
    changeStatus: jest.fn()
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('show task dropdown actions', () => {
        const tree = TestRenderer.create(<ActionsDropDown {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});