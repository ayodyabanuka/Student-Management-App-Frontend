import React, { useState } from 'react';
import axios from 'axios';

function UpdateStudent({ userId }) {
  const [name, updateName] = useState();
  const [age, updateAge] = useState();
  const [gender, updateGender] = useState();

  function updateData(e) {
    e.preventDefault();

    const updatedStudent = {
      name,
      age,
      gender,
    };

    axios
      .put('http://localhost:8070/student/update/' + userId, updatedStudent)
      .then((req, res) => {
        alert('Student Added!');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={updateData}>
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
                updateName(e.target.value);
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
                updateAge(e.target.value);
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
                updateGender(e.target.value);
              }}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
