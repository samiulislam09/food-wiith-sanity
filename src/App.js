import { Route, Routes } from 'react-router-dom';
import './App.css';
import BranchDetail from './components/BranchDetail/BranchDetail';
import OurBranches from './components/OurBranches/OurBranches';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<OurBranches></OurBranches>}></Route>
        <Route path='/branchdetail' element={<BranchDetail></BranchDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
