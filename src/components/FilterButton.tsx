import { filterButton } from "../config";
import Button from "./Button";


const FilterButton = () => {
  return (
    <div className="flex justify-center items-center">
        {filterButton.map(btn=>{
            return <Button key={btn.id} name={btn.name}/>
        })}
    </div>
  )
}

export default FilterButton