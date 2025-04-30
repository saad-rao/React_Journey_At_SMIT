import React, {useEffect, useState} from 'react'

const Product = () => {

const [product, setProduct] = useState([])
    const fetchData = async () =>{
        try{
            const data  = await fetch ('https://munchies-v1.vercel.app/munchies')
            const res = await data.json()
            console.log(res);
            setProduct(res)
            
        }

        catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{
        fetchData()
    },[])


  return (
    <div>
      {product.map((item, index)=>{
        return(
            <div key={index}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.id}</p>

            </div>  
        )

      })}
    </div>
  )
}

export default Product
