import React, { useEffect,useState } from 'react'
import {getData,deleteData} from '../Api/Api' 
import { Link } from 'react-router-dom'

const List = () => {
  const [data,setData] = useState([])

    const getAllData =  async ()=>{
     
        const result = await getData()
        console.log(result.data);
        setData(result.data)
    }
    const removeItem = (id)=>{
      deleteData(id)
      getAllData()
    }
    useEffect(()=>{
        getAllData()
    },[])
  return (
    
    <div>
      <table className="table">
  <caption>List of users</caption>
  <thead>
    <tr className="table-info">
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((res)=>{
      const {id,name,email,phone} = res
    
    return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <Link to={`/update/${id}`}>
        <td><button>Update</button></td>
      </Link>
      <td><button onClick={()=>{removeItem(id)}}>Delete</button></td>
    </tr>)
})}
  </tbody>
</table>
    </div>
  )
}

export default List