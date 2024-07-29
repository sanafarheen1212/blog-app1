import {useState} from "react";

export default function Registerpage(){
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    async function register(ev){
        ev.preventDefault();
        
            const response = await fetch('http://localhost:4000/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
      
            if (response.ok) {
              alert('Registration successful');
            } 
        } 
        
      
    return(
        <form className="regsiter" onSubmit={register}>
            <h1>Register</h1>
        <input type="text" placeholder="give me your name " value={username}
        onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Remember me" value={password}
        onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
    </form>
    );
}