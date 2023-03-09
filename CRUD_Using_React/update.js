import React, { useState } from 'react';
// import './post.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './put.css';

function Update1() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('')
 
  async function update(event) {
    event.preventDefault();
    try {
        await axios.put("http://localhost:8080/customer",
            {

                id: id,
                name:name,
                username:username
            });
        alert("Successfully Update");
        setId();
        setName();
        setUsername();
    }
    catch (err) {
        alert("update Failed");
    }
}

  return (
    <form id="form" >
      <h1>UPDATE FORM</h1>
      <label for="id">Id:</label>
      <br></br>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <br></br>
      <label for="name">Ice_Cream</label>
      <br></br>
        <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br></br>
      <label for="number">CustomerName</label>
      <br></br>
        <input className="input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br></br>
        <center>

      <button className="btn btn-success" type="submit" onClick={update}>Update</button>
        </center>
    </form>
  );
}



function Update() {
  const [fit, setFit] = useState([]);

  function handleAddTelevision(fits) {
    setFit([...fit, fits]);
  }

  return (
    <div className='all'>
    <br/>
    <div className="container">
      {/* <h1 className="title">TELEVISION DETAILS</h1> */}
      <Update1 Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    {/* <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px'}}
                >Back</button>
            </Link></center> */}
    </div>
    
  );
}

export default Update;