import { API } from "./api.js";

const botonIngrediente = document.getElementById("create")
const listIngredientes = document.getElementById("list")
const ingredienteLista = document.getElementById("ingredientList")

listIngredientes.addEventListener('submit', async (e)=>{
    e.preventDefault
    const ingredientes = await infoIngredientes()

    ingredienteLista.innerHTML = ''

    ingredientes.forEach(ingrediente => {
        const li = document.createElement('li')
        li.textContent = ingrediente
        ingredienteLista.appendChild(li)
    })
})

botonIngrediente.addEventListener('submit', (e)=>{
    e.preventDefault()
    nuevoIngrediente()
})
export const infoIngredientes = async() =>{
    try {
        const res = await fetch(`${API}/ingredientes/infoIngrediente`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        if(!res.ok){
            throw new Error('asd')
        }
        const nombres = await res.json()
        return nombres.length ? nombres : []

    } catch (error) {
        console.log(error)
        return []
    }
}
export const nuevoIngrediente = async()=>{
    const nombre = document.getElementById("name").value
    try {
        const res = await fetch(`${API}/ingredientes/agregarIngredientes`,{
            method: 'POST',
            body: JSON.stringify(nombre),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}