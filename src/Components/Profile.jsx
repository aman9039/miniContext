import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
const Profile = () => {
    const {user} = useContext(UserContext)

   if(!user) return <div>please login</div>

   return <div className='text-2xl mt-6 '>Welcome {user.username} {user.password}</div>
}

export default Profile