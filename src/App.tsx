import axios from "axios"
import { useEffect, useState } from "react"
import Heading from "./components/Heading"
import FilterButton from "./components/FilterButton"
import CardComponent from "./components/CardComponent"
import Spinner from "./components/Spinner"
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
  const[category,setCategory]=useState("All")
  const[liked,setliked]=useState([{} as string])
  const[loader,setLoader]=useState(false);
  


  let filterData:dataObject[]=[]
  if(category=='All'){
     Object.values(datas).forEach((data: dataObject[]) => {
       data.forEach((element) => {
         filterData.push(element);
       });
     });
  }
  else filterData=datas[category]
 

  useEffect(()=>{
    setLoader(true)
    axios.get<fetchResponse>(
      "https://codehelp-apis.vercel.app/api/get-top-courses"
    ).then((res)=>{setData(res.data.data)
      setLoader(false)
    });
  },[])
  if(loader){
   return (
     <div className="h-screen flex  flex-col items-center justify-center">
     
       <Spinner />
     </div>
   );
  }
  return (
<<<<<<< Updated upstream
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <Heading />
        <FilterButton onclick={(name) => setCategory(name)} />
=======
    <div className="flex flex-col justify-center items-center">
      <Heading />
      <div className=" bg-gray-800 min-h-screen w-full">
        <div className="">
          <FilterButton
            category={category}
            onclick={(name) => setCategory(name)}
          />
        </div>
        <div className="">
          <CardComponent
            setliked={setliked}
            liked={liked}
            filterData={filterData}
          />
        </div>
>>>>>>> Stashed changes
      </div>

      <CardComponent
        setliked={setliked}
        liked={liked}
        filterData={filterData}
      />
    </div>
  );
}

export default App
