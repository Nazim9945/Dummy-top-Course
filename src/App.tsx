import axios from "axios"
import { useEffect, useState } from "react"
import Heading from "./components/Heading"
import FilterButton from "./components/FilterButton"
import CardComponent from "./components/CardComponent"
export interface imgObject{
  url:string,
  alt:string
}
export interface dataObject{
  id:string,
  title:string,
  description:string,
  image:imgObject
}
interface fetchData{
  Business:dataObject[],
  Development:dataObject[],
  Design:dataObject[],
  LifeStyle:dataObject[]

}
interface fetchResponse{
  data:fetchData
}

const App = () => {
  const[datas,setData]=useState<fetchData>({} as fetchData) 
  let filterData:dataObject[]=[]
// console.log(Object.values(datas))
   Object.values(datas).forEach((data: dataObject[]) => {
    // console.log(data)
     data.forEach((element) => {
       filterData.push(element);
     });
   });
 

  useEffect(()=>{
    axios.get<fetchResponse>(
      "https://codehelp-apis.vercel.app/api/get-top-courses"
    ).then((res)=>{setData(res.data.data)
      console.log("hey",res.data.data)
    });
  },[])
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading/>
      <FilterButton/>
      <CardComponent filterData={filterData}/>
    </div>
    
  )
}

export default App
