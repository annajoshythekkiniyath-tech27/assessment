import React from 'react'
import{useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {

    const{register,handleSubmit,reset} =useForm()
    const navigate = useNavigate()

    const onSubmit = async (data)=>{
        console.log(data)
        const response = await fetch("http://localhost:3000/product",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        if(!response.ok){
          throw new Error("Failed to add Product")
        }

        alert('Product Added')
        reset()
        navigate('/products') //go to products page on client side
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <form className='bg-white p-6 rounded-1g shadow-md w-96 space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-xl font-semibold text-center'>Add Product</h2>

            <input 
            placeholder='Enter Product Name'
            className='w-full border p-2 rounded'
            {...register("name")}
            />

            <input 
            placeholder='Enter Product Price'
            className='w-full border p-2 rounded'
            {...register("price")}
            />

            <input 
            placeholder='Enter Product Image'
            className='w-full border p-2 rounded'
            {...register("image")}
            />

            <textarea
            placeholder='Enter Product Description'
            className='w-full border p-2 rounded'
            {...register("description")}
            />  

            <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded'>Add product</button>

        </form>

    </div>
  )
}

export default AddProduct
 
