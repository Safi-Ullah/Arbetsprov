import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Navbar } from '../Navbar';
import { Enums } from '../../../constants';

const props = {
    addTask: jest.fn(),
    setNewTask: jest.fn(),
    newTask: {},
    setSelectedScreen: jest.fn()
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('tests snapshot', () => {
        const tree = TestRenderer.create(<Navbar {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});