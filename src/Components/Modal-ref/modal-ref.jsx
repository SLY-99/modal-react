import React from 'react';
import '../Modal-ref/modal-ref.css';

function ModalRef() {

    const headingRef = React.useRef(null)
  
  return (
    <>
      <div className='center-right'>
        <button className='btn' onClick={()=>{
                headingRef.current.style.display = "block";
              }}>Modal UseRef</button>
      </div>


      <div ref={headingRef} className='modalBackground' onClick={()=>{
                headingRef.current.style.display = "none";
              }}>
          <div className='modalWrapper'>
              <button className='btn-exit' onClick={()=>{
                headingRef.current.style.display = "none";
              }}>&times;</button>
              <h3 className='modal-title'>Modal with UseRef</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate facere temporibus assumenda harum. Facilis, magnam? Maxime id itaque, quae earum praesentium ad quis quibusdam explicabo, cupiditate accusantium quod consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse nemo aspernatur reprehenderit corrupti eaque, ullam tenetur consequatur illo corporis ad rem vel iure libero quaerat cupiditate pariatur, ipsa non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At animi ipsa totam perferendis iure eaque voluptate laudantium corrupti, obcaecati quibusdam, fugit quis ut, praesentium doloremque cum delectus hic molestias! Quos?</p>
          </div>
      </div>
    </>
    );
  }
  
  export default ModalRef;