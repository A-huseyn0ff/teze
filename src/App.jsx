
import './App.css';
import { useEffect,useState } from "react";


function App() {
  const [data, setData] = useState()
  // const [Inputvalue, setInputvalue] = useState()

const getProducts= async ()=>{
  const res=await fetch('https://northwind.vercel.app/api/products').then(data=>data.json())
  setData(res)
}

useEffect(() => {
getProducts()
}, [])
const handlesearch=(e)=>{
  setData([...data].filter(x=>x.name.includes(e.target.value)))
  
}
const sortID=()=>{
  setData([...data].sort((a,b)=>(a.name>b.name ? 1 : b.name>a.name ? -1 :0)))
}
  return (
   <>
<input type="text"  onChange={handlesearch}/>
<button onClick={sortID}>A-Z</button>
{/* <button>search</button> */}
<table style={{border:"1px solid"}}>
  {data && data.map((x)=>{
    return(
    <table>
<td className='td'>{x.id} </td>
<td className='td'>{x.supplierId}</td>
<td className='td'>{x.categoryId}</td>
<td className='td'>{x.quantityPerUnit}</td>
<td className='td'>{x.unitPrice}</td>
<td className='td'>{x.unitsInStock}</td>
<td className='td'>{x.unitsOnOrder}</td>
<td className='td'>{x.reorderLevel}</td>
<td className='td'>{x.name}</td>
    </table>
    )
  })}
  </table>

  

  </>
  )
}
export default App;

