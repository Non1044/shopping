import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link ,useParams,useNavigate} from "react-router-dom";

export default function Showitem() {
  const { id } = useParams();
  const [users,setUsers]=useState<any>([])
  useEffect(()=>{
  fetch('https://dummyjson.com/products/'+id)
      .then(res=>res.json())
      .then(result=>{
        setUsers(result)})
  },[])
  return (
    <section>

              <div className="container1">
                <div  key={users.id}>
                <img src={users.thumbnail} height={200} width={260}  alt={users.title}></img>
                </div>
                <div className="product">
                  <h1 className="namepro">{users.title}</h1>
                  <p className="desc">
                  {users.description}
                  </p>
                  <p className='pro1'>${users.price}</p>
                  </div>
                </div>
  
           </section>
  )
}