import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import {AboutUs} from './components/AboutUs.js'
import { ContactUs } from './components/ContactUs';
import { Routes,Route } from 'react-router-dom';
import {Series} from './Pages/Series'
import {Movies} from './Pages/Movies'
import {TvShows} from './Pages/TvShows'
import { MenuBar } from './Pages/MenuBar';
import { Action } from './Pages/Action';
import { MOvieDetail } from './Pages/MOvieDetail';
import { Login } from './components/Login';

function App() {

  // var st = {
  //   color:"red",
  
  // }

  // var name = "ROYAL"
  // var no1 = 100
  // var no2 = 200
  // var no3 = no1 + no2;
  // var salary = 210.25
  // var isMarried = false
  // console.log(name)

  // var employee ={

  //   name : "jay",
  //   age : 25,
  //   salary : 20000,
  //   isMarried : true
  // }

  // var students = [
  //   {
  //     name : "jay",
  //     age : 25,
  //     marks:500
  //   },
  //   {
  //     name : "raj",
  //     age : 23,
  //     marks:400
  //   },
  // ]


  // const demo =(x)=>{
  //   console.log("demo",x)
  // }
  var name = "royal"
  var contactPersons = [
    {
      name : "jay",
      age : 25,
      contactNo:1234567890
    },
    {
      name : "rahul",
      age : 30,
      contactNo:1234568890
    },
    {
      name : "Dhiraj",
      age : 40,
      contactNo:8846541654
    }
  ]
  return (

    <div className = "App">

    <MenuBar/>
    <Routes>
      <Route path = "/series" element = {<Series/>}></Route>
      <Route path = "/movies" element = {<Movies/>}></Route>
      <Route path = "/tvshows" element = {<TvShows/>}></Route>
      <Route path = "/series/action" element = {<Action/>}></Route>
      <Route path = "/movies/:id/:id1" element = {<MOvieDetail/>}></Route>
      <Route path = "/" element = {<Login/>}></Route>
      

    </Routes>



      {/* <h1>APP JS</h1>

      <Home name = {name}/>
      
      <ContactUs contactPersons = {contactPersons}/> */}


        {/* <h1>Hello</h1>
        <h2>{name}</h2>
        <h3>ANS = {no3}</h3>
        <h3>SALRY = {salary}</h3>
        <h3>is Married = 
          {
            isMarried ? "YES" :"NO" 
          }
        </h3>
        <div>
              
              <h4>{employee.name}</h4>
              <h4>{employee.age}</h4>
              <h4>{employee.salary}</h4>
              <h4>
                {
                  employee.isMarried ? "YES" :"NO"
                }
              </h4>
        </div>

                <div style = {st}>
                    {

                      students.map((stu)=>{
                        return(
                          <div>
                            <h4>NAme = {stu.name}</h4>
                            <h4>Age = {stu.age}</h4>
                            <h4>MARKS = {stu.marks}</h4>
                            <h4>------------------------</h4>
                          </div>
                        )
                      })                   
                    }
                    
                </div>

 */}

        {/* <button onClick = {()=>demo(150)}>CLICK ME</button> */}
    </div>
  );
}

export default App;
