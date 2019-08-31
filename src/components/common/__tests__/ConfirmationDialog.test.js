import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ConfirmationDialog } from '../ConfirmationDialog';
import { Enums } from '../../../constants';

const props = {
    handleClose: jest.fn(),
    showModal: true,
    successCallback: jest.fn(),
    message: ''
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('display dialog', () => {
        const tree = TestRenderer.create(<ConfirmationDialog {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('hidden dialog', () => {
        props['showModal'] = false;
        const tree = TestRenderer.create(<ConfirmationDialog {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});