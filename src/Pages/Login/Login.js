import React,{ Children, useState} from 'react'
import Container from '../../Conponents/Container'
import { useLogin } from '../../hooks/useLogin'
import styles from './login.module.css'


const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {login ,err ,isPending}=useLogin()


  const handleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)
  }

  return (
 
<Container>
         <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>password</span>
                <input type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </label>
            {/* {!isPending && <Button  type='submit' className='btn'>Login</Button >}
            {isPending && <Button type='submit' className='btn' disabled>Loading..</Button >} */}
            {err && <p>{err}</p>}
        </form>

</Container>

  )
}

export default Login


export const Button =({type ,disabled})=>{
  return(
    <button type ={type} disabled={disabled}>
      {Children}
    </button>
  )
}