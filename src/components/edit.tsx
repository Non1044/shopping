import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


export default function Edit({params}:any) {
    let {id}  = useParams()
    const aa=Number(id)
    const [user,setUsers]=useState({
        "id": 0,
        "title": "",
        "description": "",
        "price": "",
})
    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+aa)
        .then(res=>res.json())
        .then(result=>{setUsers(result)})
    },[])

    const handleSubmit=(event:any)=>{
        event.preventDefault();
        fetch('https://dummyjson.com/products/update',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user)
        })
        alert('แก้ไขสำเร็จ แต่ api ไม่มีเส้น PUT ครับ')
            window.location.href='/'
    }


  return (
    <div>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            value={user.title}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,title:event.target.value
                }))
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            value={user.description}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,description:event.target.value
                }))
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="price"
            id="price"
            name="price"
            value={user.price}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,price:event.target.value
                }))
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
