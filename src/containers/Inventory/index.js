import React from 'react';

import Modal from '../../components/Modal';

const Inventory = ({ title, info, isOpen, setIsOpen, }) => {
    const choiceInventory = {
        Personagem: <div>personagem</div>,
        Itens: <div>itens</div>,
        Mapas: <div>mapas</div>,
        Registros: <div>registros</div>,
        Opções: <div>opções</div>
    };
    return(
        <div>
            <Modal
                title={title}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                content={choiceInventory[title]}
            />
        </div>
    );
}

export default Inventory;