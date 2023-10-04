import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link ,useParams,useNavigate} from "react-router-dom";
export default function User() {
  const [users,setUsers]=useState<any[]>([])
  useEffect(()=>{
  fetch('https://dummyjson.com/products')
      .then(res=>res.json())
      .then(result=>{
        setUsers(result.products)})
  },[])

  const handleDelete =(id:Number)=>{
    fetch('https://dummyjson.com/products/delete',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:id})
    })
    .then(res=>res.json())
    .then(result=>{
      alert('ลบข้อมูล')
      window.location.reload()
})}

  
return (

  <section>
      <div className="container">
    <div className="row justify-content-center-mb-4">
      {users.map(user=>(
            <div className="col-6">
              <div className="container0">
                <div className="img-responsive" key={user.id}>
                <img src={user.thumbnail} height={170} width={260}  alt={user.title}></img>
                </div>
                <div className="product">
                  <h1 className="namepro">{user.title}</h1>
                  <p className="desc">
                  {user.description}
                  </p>
                  <Link to={`/${user.id}`}>
                      <button className="add">View</button>
                  </Link>
                  <Link to={`/edit/${user.id}`}>
                      <button className="btn btn-secondary">edit</button>
                  </Link>
                  <button className="btn btn-secondary" onClick={()=>handleDelete(user.id)}>Delete</button>
                  </div>
                </div>
              </div>
          ))}
           </div>
           </div>
           </section>
)}