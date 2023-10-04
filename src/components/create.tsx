import React from "react";

export default function Create() {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const data = {
    title: event.target.title.value,
    description: event.target.description.value,
    price: event.target.price.value,
    thumbnail: 'https://i.dummyjson.com/data/products/1/1.jpg',
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"]
    };
    fetch('https://dummyjson.com/products/add',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        alert('สร้างสำเร็จ')
            window.location.href='/'
    })
    
  };
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            id="description"
            name="description"
          ></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            id="price"
            name="price"
          ></input>
        </div>
        <div>
        <label htmlFor="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
