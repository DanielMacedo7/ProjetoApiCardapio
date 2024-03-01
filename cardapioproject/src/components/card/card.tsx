import "./card.css";

//esse componente receberá via props os dados da comida
interface CardProps{
//propriedades que serão passadas para esses componentes    

price: number,
title: String,
image: String


}

export function Card({ price, title, image} :CardProps){
    return(
        <div className ="card">
        <img src={image}/>
        <h2>{title}</h2>
        <p><b>Valor: $</b>{price}</p>
        </div>


    )

}