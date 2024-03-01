
import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { foodData } from './interface/foodData';
import { usefoodData } from './hooks/usefoodData';
import { CreateModal } from './create-modal/create-modal'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//import './meu.js'

//import { CreateModal } from './components/create-modal/create-modal';

function App() {

  

const { data } = usefoodData();

const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
  setIsModalOpen(prev => !prev)
}


return(

<Router> 
  <div className = "container">
      
      
      <nav>
        <ul>  
        <li><Link to="/App.tsx">Home</Link></li>
        </ul>
    </nav>

    <h1>Cardápio</h1>
      <div className="card-grid">
         {data?.map(foodData => 
         <Card 
         price={foodData.price} 
         title={foodData.title}
         image={foodData.image}
         />
         )}                  
      </div> 
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>  
      
    
      </div> 

    

      </Router>       

)



}



export default App


/*

obs: existe diferença entre as files que contem.tsx e .ts "se for utilizar html dentro do typescript é
necessário adicionar a extensão txs agora se for só o typescript puro pode ser apenas ts!!"


Ali em {data.map(foodData => <Card/>)} iremos pegar todos os objetos que virá do nosso get e setar para
dentro do nosso componente card 

precisamos passar aqueles parâmetros foodData para nosso card, com isso eu já vou mostrar em tela um
componente card para cada um dos datas que vierem do get...

agora para pegar esses dados do back end vamos utilizar uma react query 

1 passo: instalar essa lib :  npm install @tanstack/react-query

2 passo: criar um diretório hooks que será responsável por pegar esses dados do back end

3 passo: faremos um fetch em nossos dados e salvar ele em uma variável para que nossos componentes consiga
utiliza-los, para isso precisamos instalar tambem a extensão "npm install axios" essa biblioteca é usada
para disparar requisições HTTP


4 passo: const fetchData = async (): AxiosPromise<foodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

esse passo vai conter essa função do fetch que é assincrona para disparar essa requisição e dentro da
variável response vai conter nossa resposta do back end, precisamos passar a API_URL como parâmetro pois
não estamos fazendo uma requisição passando um body, então essa url trará essa resposta do banco. isso é
chamado de consumo da API

5 passo: precisamos criar um objeto de retorno: 
 const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

6 passo:  return {
     esse retorno corta o caminho e simplifica esses dados e coloca direto no nosso objeto de retorno    
        ...query,
        data: query.data?.data
    }
   
    por que o axios faz a mesma função da biblioteca nativa do javascript então esse retorno vai simpli-
    ficar para o sistema essa entrada dos dados no objeto

7 passo: substituir essa função const data: foodData[] = [];
  por essa: const { data } = usefoodData();    
  
  obs: também é necessario colocar uma anotação de ponto de interrogação ao lado do data? para indicar que
  a api pode ou não responder então ele vem é do tipo undefined

8 passo: precisamos declarar um <QueryClientProvider client={queryClient}> 
envolta da nossa aplicação para não gerar um erro na hora de fazer a busca nesses dados do back end.
         
         
9 passo: vamos startar nossa aplicação para ver se esses dados estão sendo pegos de forma correta e para
isso vamos utilizar "npm run dev" para startar a aplicação.

10 passo: 


*/