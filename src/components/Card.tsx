import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { imgObject } from "../App"

interface Props{
image:imgObject,
title:string,
description:string,
id:string,
liked:string[],
setliked: React.Dispatch<React.SetStateAction<string[]>>

}

const Card = ({id,image,title,description,liked,setliked}:Props) => {
  
   
   
const handler=(id:string)=>{
 if(liked.includes(id)){
  setliked(liked.filter(like=>like!=id));
 }
 else{
  setliked([...liked,id]);
 }
}
    const {url,alt}=image
    const desc=description.slice(0,100)+ "...";
  return (
    <div className="max-w-[200px]  border-solid border-2 border-sky-500 p-2 m-2">
      
        <img className="h-full w-full" src={url} alt={alt} />

        <div className="font-semibold">{title}</div>
        <div>{desc}</div>
        <button onClick={()=>handler(id)} className="flex justify-center items-center rounded-full bg-white border max-w-8 p-2">
            {!liked.includes(id)?<FcLikePlaceholder size={"15"}/>:<FcLike size={"15"}/>}
        </button>
      
    </div>
  );
}

export default Card