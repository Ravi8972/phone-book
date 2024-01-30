import React,{useState} from"react";

function App() {

  const [username, setUserName] = useState("");
  const [number, setnumber] = useState();
  const [store, setStore] = useState([]);

function  handleClick(){
  setStore([...store, {username, number}]);
}


  return (
    <div className="App">
        <h2>Phone Book</h2>
        <label htmlFor="name">Enter Name </label> 
         <input type="text" placeholder="Enter your name " value={username} onChange={(e)=>setUserName(e.target.value)} />< br /> <br />

         <label htmlFor = "Number"> Phone Number :</label>
         <input ype="number" placeholder="Add Phone Number" value={number} onChange={(e) => setnumber(e.target.value)}/>  <br/>< br/>

         <button className="Add-btn" type="submit" onClick={handleClick}>Add contact </button> <br /> <br/>

          <h2>Contacts</h2>
          <ul>
            {
              store.map((item,i) => {
                return <li key={i}>{item.username}  -  {item.number}</li>
            })}
          </ul>

    </div>
  );
}

export default App;
