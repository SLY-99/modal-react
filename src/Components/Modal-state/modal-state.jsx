import React, { useState } from 'react';
import '../Modal-state/modal-state.css';
import ModalBody from '../Modal-state/modal-body';

function ModalState() {

const [openModal , setOpenModal] = useState(false);
  
  return (
    <>
      <div className='center-left'>
        <button className='btn' onClick={() => {
          setOpenModal(true);
        }}>Modal UseState</button>
      </div>
      {openModal && <ModalBody closeModal={setOpenModal} />}
    </>
    );
  }
  
  export default ModalState;