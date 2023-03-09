import React,{useState} from 'react'


function Register() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
   
    const save = (e) => {
        e.preventDefault();
        const obj = {
            id,name,username
        }
        fetch("http://localhost:8080/customer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)}).then(console.log("Registartion Successful"));
    }

    
    
  
  
    return ( 
        <div className='container' style={{paddingTop:200}}>
       
        <center><div style={{border:'5px sold black',backgroundColor:"white",borderRadius:5,width:1200,paddingLeft:50}}>
        
        <h1>Registration form</h1>
        <form>
    
        <div className='row' style={{padding:10,width:800}}>
            <label>ID</label>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>Ice_Cream</label>
            <input type="text"  value={name} onChange={(event) => setName(event.target.value)} placeholder='Type IceCreamName here'/> 
        
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>CustomerName</label>
            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Type CustomerName here' /> 
        
        </div>
       
            <button className='btn btn-primary' onClick={save}>POST</button>
            
        
        
    </form>
    </div>
    </center>
    </div>
       
        
     
            
    
    
     );
}

export default Register;