
interface props{
    name:string,
    onclick:(name:string)=>void
   
}
const Button = ({name,onclick}:props) => {
  return (
    <button onClick={()=>{
        onclick(name)
    }} className="p-2 rounded-md font-semibold">{name}</button>
  )
}

export default Button