import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
const Contact = () => {
  const [form , setForm]=useState({name:"" , email:"" , message:""});
  const[isLoading , setIsLoading]=useState(false);
  const formRef =useRef(null);
  const [currentAnimation , setCurrentAnimation]=useState('idle')
  
  const handleChange =(e)=>{
    setForm({...form , [e.target.name]:e.target.value})

  };

  const handleFocus =()=>setCurrentAnimation('walk')
  const handleBlur =()=>setCurrentAnimation('idle')
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    setIsLoading(true);
setCurrentAnimation('hit');
emailjs.send(
import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ,
import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ,
{
  from_name: form.name,
  to_name: "chinthaka",
  from_email:form.email,
  to_email:"hondarangala1998@gmail.com",
  message:form.message
},
import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
).then(()=>{
  setIsLoading(false)
  setForm({name:"" , email:"" , message:""});
})
.catch
((error)=>{setIsLoading(false)
  setCurrentAnimation('idle');
console.log(error)})
};


  return (
   <section className='relative flex lg:flex-row flex-col max-container'>
<div className='flex-1 min-w-[50%] flex flex-col'>
<h1 className='head-text'>Get in Touch</h1>
<form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>

<label className='text-black-500 font-semibold'> Name
<input type='text' 
name='name'
className='input' 
placeholder='Enter your name'
required 
value={form.name} 
onChange={handleChange}
onFocus={handleFocus} 
onBlur={handleBlur}/>

</label>

<label className='text-black-500 font-semibold'> Email
<input type='email' 
name='email'
className='input' 
placeholder='Enter your email'
required 
value={form.email} 
onChange={handleChange}
onFocus={handleFocus} 
onBlur={handleBlur}/>

</label>

<label className='text-black-500 font-semibold'> Message
<textarea 
name='message'
className='input' 
placeholder='Message'
required 
value={form.message} 
onChange={handleChange}
onFocus={handleFocus} 
onBlur={handleBlur}/>
</label>

<button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} 
disabled={isLoading} onSubmit={handleSubmit}>{isLoading ? "sending..." :"Send Message"}</button>

</form>

</div>
<div  className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
<Canvas  camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}>
<Suspense fallback={<Loader />}>
<Fox/>






</Suspense>

</Canvas>
</div>

   </section>
  )
}

export default Contact