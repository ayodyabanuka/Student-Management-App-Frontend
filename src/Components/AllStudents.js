import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get('http://localhost:8070/student/')
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => console.log(err.message));
    }
    getStudents();
  }, []);

  const tableRows = students.map((info) => {
    return (
      <tr>
        <td>{info._id}</td>
        <td>{info.name}</td>
        <td>{info.age}</td>
        <td>{info.gender}</td>
        <td>
          <button onClick={updateStudent(info._id)}></button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h1>All Students</h1>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default AllStudent;
