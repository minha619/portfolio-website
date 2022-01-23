import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, category, description, index, website } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <p><a href={website} target="blank">Visit the website!</a></p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;