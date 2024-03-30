import React, { useState, useEffect} from 'react'

import './Card.css'


function Card() {
       const [category, setCategory] = useState("fitness");
       const [quote, setQuote] = useState({});
       
   

    const generateCode = async() =>{
       
        console.log(category);
        const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
        console.log(url);
         const res =  await fetch(url ,{
        method: 'GET',
        headers: { 'X-Api-Key': '8wypE7ya5HQj+hsqSECDMg==CmujXkQnJA0Qdh7i',
        'Content-Type': 'application/json',
         },
    

        });
        const result = await res.json();
        console.log(result);
        setQuote(result[0]);
       
       
    }

    useEffect(() =>{
        generateCode();
    }, [])
  return (
   
<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-lg shadow-blue-gray-500/40">
 
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {quote.quote}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {quote.author}
    </p>
  </div>
  <div className="flex justify-between p-6 pt-0">
    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="fitness">Fitness</option>
        <option value="graduation">Graduation</option>
        <option value="inspirational">Inspirational</option>
        <option value="intelligence">Intelligence</option>
        <option value="design">Design</option>
    </select>
    <button onClick={generateCode}
      className="btn-1 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Generate
    </button>
  </div>
</div>


  )
}

export default Card
