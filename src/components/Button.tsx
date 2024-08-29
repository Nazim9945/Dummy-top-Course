
interface props{
    name:string,
   
}
const Button = ({name}:props) => {
  return (
    <button className="p-2 rounded-md font-semibold">{name}</button>
  )
}

export default Button