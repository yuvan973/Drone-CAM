import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import Find from './Find';
function Delete1() {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/customer?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    //  []);
    // }
    return (
        <>
        <center>
            <h2>Delete User</h2>
            <br></br>
            <div>
                <input type="number" placeholder='Enter Id' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link> */}
            <h2>
                {error}
            </h2>
            {/* <div className='Find'>

                <Find />
            </div> */}
            </center>
        </>
    );
}

export default Delete1;