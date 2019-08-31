import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BootstrapModal } from '../BootstrapModal';
import { Enums } from '../../../constants';

const props = {
    handleClose: jest.fn(),
    showModal: true,
    heading: '',
};

describe(Enums.TEST_TYPES.snapshot, () => {
    it('display modal', () => {
        const tree = TestRenderer.create(<BootstrapModal {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('hidden modal', () => {
        props['showModal'] = false;
        const tree = TestRenderer.create(<BootstrapModal {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});