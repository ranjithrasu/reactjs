
import { useState } from 'react';
import './App.css';

const data=[{
  name:"ranjith",
  age:27,
  course:"B.E CIVIL"
},
{
  name:"mani",
  age:25,
  course:"B.Com"
}
]
function App() {
  const [datas,setdata]=useState(data);
  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [course,setcourse]=useState('');

  function handleClick() {
    
    const insertAt =datas.length; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...datas.slice(0,insertAt),
      // New item:
    {  
        name: name,
        age:age,
        course:course
       },
      
      // Items after the insertion point:
      // ...datas.slice(insertAt)
    ];
    setdata(nextArtists);
    setname('')
    setage('')
    setcourse('')
  }
  return (
    <div className="App">
       <div className='head'>
        <h1>STUDENT DATA LIST</h1>
        </div>
        <label><b>STUDENT NAME</b></label>
        <br/>
        <input 
        type='text' 
        placeholder="ENTER NAME" 
        className='name'
        value={name}  
        onChange={e => setname(e.target.value)}/>
        <br/>
        <label><b>STUDENT AGE</b></label>
        <br/>
        <input 
        type='number'
        placeholder="ENTER AGE" 
        className='age'
        value={age} 
        onChange={e => setage(e.target.value)}/>
        <br/>
        <label> <b>STUDENT COURSE</b></label>
        <br/>
        <input 
        type='text' 
        placeholder="ENTER COURSE" 
        className='course'
        value={course} 
        onChange={e => setcourse(e.target.value)}/>
        <br/>
        <button 
        onClick={handleClick} 
        className="submit"><b>SUBMIT</b></button>
        <br/>
       
      <table> 
      <tr>
      <th>NAME</th>
      <th>AGE</th>
      <th>COURSE</th>
      <th>EDIT</th>
      <th>DELETE</th>
      </tr> 

    {datas.map((value,key) => {
      return (
        <tr key={key} >
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>{value.course}</td>
          <td><button className='edit'>EDIT</button></td>
          <td><button className='delete'
           onClick={() => {
            setdata(
              datas.filter(a =>
                a !== value
              )
            );
          }}
          >DELETE</button></td>
        </tr>
      )
    })}
    </table>
    </div>
  );
}
export default App;
