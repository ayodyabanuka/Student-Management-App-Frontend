import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post('http://localhost:8070/student/add', newStudent)
      .then((req, res) => {
        alert('Student Added!');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className='container'>
      <form onSubmit={sendData}>
        <div className='mb-3'>
          <label for='name' className='form-label'>
            Student Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter Student Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for='age' className='form-label'>
            Student Age
          </label>
          <input
            type='text'
            className='form-control'
            id='age'
            placeholder='Enter Student Age'
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label for='gender' className='form-label'>
            Student gender
          </label>
          <input
            type='text'
            className='form-control'
            id='gender'
            placeholder='Enter Student gender'
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
