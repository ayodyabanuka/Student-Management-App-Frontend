import AddStudent from './Components/AddStudent';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import AllStudent from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<AllStudent />}></Route>
        <Route path='/add' element={<AddStudent />}></Route>
        <Route path='/update' element={<UpdateStudent />}></Route>
      </Routes>
    </>
  );
}

export default App;
