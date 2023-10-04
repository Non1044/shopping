import './App.css'
import './bootstrap.css'
import Showitem from './components/ProductItem';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";
import User from './components/Product';
import React, { useEffect, useState } from 'react'
import Edit from './components/edit';
import Create from './components/create';

export default function App() {
  

  return (<div>
    <div className="d-grid gap-2 d-md-block z-3 position-absolute  rounded-3">
        <Link to={`/create`}><button className="btn btn-primary" type="button" >create</button></Link>
        </div>
        <Link to="/"><div className='head'>Online Store</div></Link>
       <div className='pro'>Product</div>
             <Routes>
             <Route path="/edit/:id" element={<Edit/>}></Route>
             <Route path="/create" element={<Create/>}></Route>
             <Route path="/" element={<User/>}></Route>
            <Route path="/:id" element={<Showitem/>}></Route>
            </Routes>
      </div>
  )
}
