import { filterButton } from "../config";
import Button from "./Button";

interface props{
    onclick:(name:string)=>void
}
const FilterButton = ({onclick}:props) => {
  return (
    <div className="flex justify-center items-center">
        {filterButton.map(btn=>{
            return <Button onclick={(name)=>onclick(name)}key={btn.id} name={btn.name}/>
        })}
    </div>
  )
}

export default FilterButton