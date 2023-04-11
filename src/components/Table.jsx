import React, { useEffect, useState } from "react";

const Table=()=>{
    var id=JSON.parse(window.localStorage.getItem("st"));
    const[data,setDate] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users').then((result)=>{
            result.json().then((resp)=>{
                setDate(resp)
            })
        })
    },[])

    return(
        <>
        <div className="">
            <h2 style={{color:"white"}} >Authors table</h2><hr/>
            <table className=" table table-hover table-dark text-light  table-hover text-center">
                <thead className="fs-4">
            <tr>
                <th></th>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>DEPLOYED</th>
                <th>ACTION</th>
            </tr>
            </thead>
           {
            data.map((item,index)=>
            <tbody>
            <tr>
                 <td><img src="./user1.jpg" height="60px" width="60px" style={{"borderRadius": "50%"}}/></td>
                <td>{item.name}<br/>{item.email}</td>
                <td>{item.function}</td>
                <td> {id==item.email ? <h4 style={{color:"white",background:"green"}} className="btn">Online</h4> :<h4 className="btn btn-outline-light">Offline</h4> 
                    }</td>
                <td>{item.date}</td>
                <td>Edit</td>
            </tr>
            </tbody>
            )
           }
        </table>
        </div>
        </>
    )
}
export default Table;