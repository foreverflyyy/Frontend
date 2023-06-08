import React from 'react';
import './Modal.css'

interface IModalProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactNode;
}

const Modal = ({children, visible, setVisible}: IModalProps) => {

    const rootClasses = ['modal-window']

    if (visible)
        rootClasses.push('active')

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div
                className="modal-content"
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;