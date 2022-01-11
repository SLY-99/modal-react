import React from 'react';
import '../Modal-state/modal-state.css';

function ModalBody({closeModal}) {
  return (
    <>
      <div className='Background' onClick={() => closeModal(false)}>
          <div className='Wrapper'>
              <button className='exit' onClick={() => closeModal(false)}>&times;</button>
              <h3 className='title'>Modal with UseState</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate facere temporibus assumenda harum. Facilis, magnam? Maxime id itaque, quae earum praesentium ad quis quibusdam explicabo, cupiditate accusantium quod consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse nemo aspernatur reprehenderit corrupti eaque, ullam tenetur consequatur illo corporis ad rem vel iure libero quaerat cupiditate pariatur, ipsa non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At animi ipsa totam perferendis iure eaque voluptate laudantium corrupti, obcaecati quibusdam, fugit quis ut, praesentium doloremque cum delectus hic molestias! Quos?</p>
          </div>
      </div>
    </>
    );
  }
  
  export default ModalBody;