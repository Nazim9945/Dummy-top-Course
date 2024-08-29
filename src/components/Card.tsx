import { imgObject } from "../App"
interface Porps{
image:imgObject,
title:string,
description:string

}

const Card = ({image,title,description}:Porps) => {
    const {url,alt}=image
  return (
    <div>
        <div>
            <img src={url} alt={alt} />
        </div>
        <div>{title}</div>
        <div>{description}</div>
        <div>icon comes here</div>
    </div>
  )
}

export default Card