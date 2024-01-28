import Home from './Home';
import Pagesbar from './Pagesbar';
import { useState, useEffect } from "react";
import Single from './Single';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Temp from './Temp';

export default function App() {
  const [section,setSection] = useState(0);  
  const [page,setPage] = useState(0);
  const [itemno, setItemno] = useState(0);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {
            <div className="App">
              <h1 id="web-title">Test application</h1> <hr id='title-hr' />
              <Home currentPage={page+1} itemno = {itemno}/>
              <Pagesbar section={section} start={page} changePage={setPage} />
              <hr />

            </div>
            }>
            
            
          </Route>
          <Route path='/Single' element={<Single />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
