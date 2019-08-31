import React from 'react';
import PropTypes from 'prop-types';

export const BootstrapModal = props => {

    const { handleClose, showModal, heading, children } = props;

    if (showModal)
        return (
            <div className="modal show"
                style={{ display: 'block', paddingRight: '15px'}}
                tabIndex={-1}
                role="dialog"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{ heading }</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        { children }
                    </div>
                </div>
            </div>
        );
    else
        return <div/>;
}

BootstrapModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.array
};

BootstrapModal.defaultProps = {
    children: [<div key={1}/>]
};