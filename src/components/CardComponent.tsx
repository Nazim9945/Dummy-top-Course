import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataObject } from "../App";
import Card from "./Card";
interface props {
  filterData: dataObject[];
  liked: string[];
  setliked: React.Dispatch<React.SetStateAction<string[]>>
}
const CardComponent = ({filterData,liked,setliked}:props) => {
    
  return (
    <div className="flex justify-center items-center flex-wrap">
      {filterData.map(({ image, title, description, id }: dataObject) => {
        return (
          <Card
            setliked={setliked}
            liked={liked}
            key={id}
            image={image}
            title={title}
            description={description}
            id={id}
          />
        );
      })}
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </div>
  );
}

export default CardComponent