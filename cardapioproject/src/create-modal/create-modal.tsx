import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../hooks/usefoodDataMutate';
import { foodData } from '../interface/foodData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    //objetos passados para o banco após o clique no botão "Novo"
    const submit = () => {
        const foodData: foodData = {
            title, price, image
            

        }


        if (!title || !price || !image) {
            alert('Por favor, preencha todos os campos para conseguir adicionar uma nova Refeição.');
            return;
          }
      

  
        mutate(foodData)

    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
       
        <div className="modal-overlay">
            <div className="modal-body">
            <span className="close" onClick={closeModal}>&times;</span>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle}/>
                    <Input label="Preço" value={price} updateValue={setPrice}/>
                    <Input label="Imagem"value={image} updateValue={setImage}/>
                   
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
   
}



 /*   const foodData: foodData = {
            title, 
            price,
            image
         
        }
        mutate(foodData)
        */