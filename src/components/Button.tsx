
interface props{
    name:string,
    onclick:(name:string)=>void,
    category:string
   
}
const Button = ({name,onclick,category}:props) => {
  return (
    <button
      onClick={() => {
        onclick(name);
      }}
      className={`p-2 rounded-md font-semibold bg-black text-white m-2 ${(name===category)?`border-2 border-sky-50`:``}`}
    >
      {name}
    </button>
  );
}

export default Button