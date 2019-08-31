import React from 'react';
import TestRenderer from 'react-test-renderer';
import { EditTaskModal } from '../EditTaskModal';
import { Enums } from '../../../constants';

const props = {
    showModal: true,
    handleClose: jest.fn(),
    setNewTask: jest.fn(),
    editTask: jest.fn(),
    task: {
        title: '',
        desc: '',
        complexity: '0',
        assignee: ''
    }
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('display modal', () => {
        const tree = TestRenderer.create(<EditTaskModal {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('hidden modal', () => {
        props['showModal'] = false;
        const tree = TestRenderer.create(<EditTaskModal {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});