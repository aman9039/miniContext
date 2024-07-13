import React,{useState,useContext} from 'react';
import UserContext from '../Context/UserContext';



function Login() {
    const [username ,setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    
    const {setUser} = useContext( UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username ,password})
    };

  return (

    <div>
        <h2 className='text-2xl mb-4'>Login</h2>
        <input placeholder='username' className='border rounded mr-3 py-2 text-black px-4 hover:shrink-0 hover:' type="text"  value ={username} onChange={(e) => setUsername(e.target.value)}  />
        { "  " }
        <input className='border rounded mr-3 py-2 px-4 text-black' type="text"  value ={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

        <button className='bg-blue-600 border rounded-md py-2 px-4 hover:bg-blue-800' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login