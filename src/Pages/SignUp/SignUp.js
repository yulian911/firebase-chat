import React,{useState} from 'react'
import styles from './signup.module.css'
import { useSignUp } from '../../hooks/useSignUp'
import styled from 'styled-components'
import Container from '../../Conponents/Container'



const SignUp = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[displayName,setDisplayName]=useState('')
  const{err ,isPending ,signup}=useSignUp()


  const handleSubmit=async(e)=>{
    e.preventDefault()
    await signup(email,password,displayName)
    setEmail("")
    setDisplayName('')
    setPassword('')
  }
  return (
      <Container>
        <Box >
          <FormBox>
          <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>SignUp</h2>
            <label>
            <span>DisplayName</span>
            <input type="text" 
            value={displayName}
            onChange={(e)=>setDisplayName(e.target.value)}
            />
            </label>
            <label>
            <span>email</span>
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
            
            {!isPending && <button type='submit' className='btn'>SignUp</button>}
            {isPending && <button className='btn' disabled>loading</button>}
            {err &&<p>{err}</p>}
        </form>

          </FormBox>

  
        </Box>
      </Container>
    
  )
}

export default SignUp


const Box =styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;


`
const FormBox =styled.div`
width:50%;
border-radius:12px;
border:1px solid black;
`