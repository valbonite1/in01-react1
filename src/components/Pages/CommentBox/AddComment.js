import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddComment = ( { addRecom } ) => {

/* ========================HANDLES FORM INPUT AND FORM SUBMIT======================== */

const [firstName, setFirstName] = useState(''); //for firstName input
const [lastName, setLastName] = useState(''); //for lastName input
const [comment, setComment] = useState(''); // for comment input
const { register, handleSubmit, errors } = useForm();

//handles the submit.

const onSubmit = () => {
  setFirstName(''); //everytime you submit, empties field
  setLastName('');//everytime you submit, empties field
  setComment(''); //everytime you submit, empties field
  addRecom(firstName, lastName, comment); //passed down function from parent componenet

  alert('Your comment has been posted!')

}

  return(
    <>
      <div className='comment-header'>
        <div className='comment-header-text'> 
          <h2>Write a Recommendation</h2>
        </div>
      </div>
      <form className='modal-container' autoComplete='off'>
          <div className='modal-header'>
            <h2>Let Val know your thoughts!</h2>
            <p>Leave your comment here.</p>
          </div>
          <div className='form-container'>
              <div className='input-container'>
                <label>First Name</label>
                <input 
                  type='text' 
                  name='firstName'
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First Name'
                  ref={register({ required: true })}
                />
                {errors.firstName && <p style={{color: 'red', fontSize: '0.8rem'}}>This field is required!</p>}
              </div>
              <div className='input-container'>
                <label>Last Name</label>
                <input 
                  name='lastName'
                  type='text' 
                  required
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Last Name'
                  ref={register({ required: true })}
                  />
                  {errors.lastName && <p style={{color: 'red', fontSize: '0.8rem'}}>This field is required!</p>}
              </div>
              <div className='input-container'>
                <label>Recommendation</label>
                <textarea 
                  name='comment' 
                  rows='10' 
                  cols='40' 
                  required
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  placeholder='Recommendation'
                  ref={register({ required: true })}
                  />
                  {errors.comment && <p style={{color: 'red', fontSize: '0.8rem'}}>This field is required!</p>}
              </div>
          </div>
          <div className='modal-btn'>
            <button className='btn-write' type='submit' onClick={handleSubmit(onSubmit)}>Write</button>
          </div>
      </form>
    </>
  );
}

export default AddComment;