import { dataObject } from "../App"
import Card from "./Card"

interface props{
    filterData:dataObject[]
}
const CardComponent = ({filterData}:props) => {
  return (
    <div>{
        filterData.map(({image,title,description,id}:dataObject)=>{
            return <Card key={id} image={image} title={title} description={description} />;
        })
    }</div>
  )
}

export default CardComponent