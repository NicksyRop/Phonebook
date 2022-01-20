
import React , {useState} from 'react'



const App = () =>{


const [ newName, setNewName] = useState('')

const [ persons , setPersons] = useState([
  {name : "Nickson Kipkorir"}
])

const handleChange = (event) =>{

  setNewName(event.target.value);
}

const addPerson = (event) =>{
  event.preventDefault()

  const obj = {
    name : newName
  }

if(persons.some( person => person.name === obj.name)){

 alert( obj.name + " Already exist in phonebook")

 setNewName('')
}else{

 

  setPersons(persons.concat(obj))
 
  setNewName('')
}


}
const numbers = persons.map(person => <ul key={person.name}>{person.name}</ul>)
return(

  <div>

    <h1 style={{ color : "purple" , border : "2px solid purple"}}>Phonebook</h1>
    <form onSubmit={addPerson}>
      <div>
        <label>Name</label> <br/>
        <input type="text" value ={newName} onChange={handleChange}></input>
      </div>

      <div>
        <button style={{ color: "purple" , borderRadius : 5 , fontSize: 20 , border: "2px solid purple"}} type="submit">Add</button>
      </div>


    </form>
    <h2>Numbers</h2>

    {numbers}





  </div>
)

}

export default App;
