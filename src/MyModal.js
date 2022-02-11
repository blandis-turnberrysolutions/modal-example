import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

export function MyModal({ open, onClose, children }) {
    return (<Modal open={open} onClose={onClose} closeIcon>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>)
  }
  
  MyModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  }