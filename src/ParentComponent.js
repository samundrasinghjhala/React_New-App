import React, { useState } from 'react';
import Modal from './Model';

const ParentComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <form onSubmit={handleSubmit}>
                    <label>Name :</label>
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                    <label>Email :</label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default ParentComponent;
