import {useState,useEffect} from 'react'
import './App.css'






function App() {



  const [nom,setNom]= useState('')
  const valeur=nom.trim()

 const[produits,setProduits]= useState(()=>{
  const save = localStorage.getItem("produits")
  return save ? JSON.parse(save) : []
 })
 
 useEffect(()=>{
  localStorage.setItem("produits", JSON.stringify(produits ))
 },[produits])

  
  function  AjouterProduit(e){
    e.preventDefault()
    if(!valeur){
      alert('Veuillez entrer un nom de produit')
      return
    } 
      setProduits([...produits,valeur])
      setNom('')
    }

    function Supprimer(index){
      setProduits(produits.filter((_, i) => i !== index))

    }
      console.log(produits)


  return (
    <>
    
      <h1>Welcome to Donas</h1>
      <section>

         <form onSubmit={AjouterProduit}>


          
          <input
          placeholder='Ajouter des produits...'
          className='input'
          value={nom}
          onChange={(e) => setNom(e.target.value)}

          />

          <button 
            type='submit'
            className='btn'
            >
              Ajouter
          </button>

         </form>

          <ul className='produit'>
            {produits.map((produit, index) => (
               <li key={index}>{produit} 
                <button
                onClick={()=>Supprimer(index)} className="btnD" >x</button>
               </li>
            ))}

           
          </ul>
      </section>
     

    
    </>
  )
}

export default App