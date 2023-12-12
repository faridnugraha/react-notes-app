import React from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastNotification({msg, showToast, toastHandler}){
    return(
        <div
            aria-live="polite"
            aria-atomic="true"
            className="position-position-absolute top-0 end-0" 
        >
            <ToastContainer
            className="p-3"
            position="bottom-end"
            style={{ zIndex: 1 }}
            >
                <Toast onClose={() => toastHandler(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body>{msg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default ToastNotification;