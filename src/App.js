import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import { AboutUs } from './components/AboutUs.js'
import { ContactUs } from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';
import { Series } from './Pages/Series'
import { Movies } from './Pages/Movies'
import { TvShows } from './Pages/TvShows'
import { MenuBar } from './Pages/MenuBar';
import { Action } from './Pages/Action';
import { MOvieDetail } from './Pages/MOvieDetail';
import { Login } from './components/Login';
import { AddEmployee } from './forms/AddEmployee';
import { EmployeeDetail } from './forms/EmployeeDetail';
import { useState } from 'react';
import { TicketList } from './ticket/TicketList';
import { AddTicket } from './ticket/AddTicket';
import { SimpleForm } from './components/simpleforms/SimpleForm';
import { SimpleForm1 } from './components/simpleforms/SimpleForm1';
import { Users } from './api/Users';
import { AddDoctor } from './api/doctor/AddDoctor';

import { DoctorList } from './protectedrout/DoctorList';
import { LoginDemo } from './storage/LoginDemo';
import { LoggedInData } from './storage/LoggedInData';
import { FileUpload } from './uploader/FileUpload';
import { TableDemo } from './mui/TableDemo';
import { DoctorLogin } from './protectedrout/DoctorLogin';
import { Prod } from './components/errorHandling/Prod';
import { TryDemo } from './components/errorHandling/TryDemo';
import { QueryDemo } from './query/QueryDemo';
import { QueryDemo2 } from './query/QueryDemo2';
import { QueryDemo3 } from './query/QueryDemo3';
import { QueryDemo4 } from './query/QueryDemo4';
import { QueryDemo5 } from './query/QueryDemo5';
import { MuiDemo1 } from './muidemo/MuiDemo1';
import { MuiDemo2 } from './muidemo/MuiDemo2';
import { MuiDemo3 } from './muidemo/MuiDemo3';

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
      name: "jay",
      age: 25,
      contactNo: 1234567890
    },
    {
      name: "rahul",
      age: 30,
      contactNo: 1234568890
    },
    {
      name: "Dhiraj",
      age: 40,
      contactNo: 8846541654
    }
  ]


  const [tickets, settickets] = useState([
    {
      name: "login bug",
      desc: "resolve login bug for user"
    },
    {
      name: "logout bug",
      desc: "resolve logout bug for admin"
    }
  ])
  const deleteTicket = (ticket) => {

    settickets(tickets.filter(t => t.name !== ticket.name))

  }
  const addTicekt = (ticket) => {

    settickets([...tickets, ticket])
  }

  return (

    <div className="App">
      {/* <AddTicket addTicekt = {addTicekt}/>
      <TicketList tickets = {tickets} deleteTicket = {deleteTicket}/> */}
      {/* <SimpleForm/> */}
      {/* <SimpleForm1/> */}
      {/* <Users/> */}
      {/* <AddDoctor/>
      <DoctorList/> */}

      {/* <LoginDemo />
      <LoggedInData /> */}
      {/* <DoctorLogin/> */}
      {/* <QueryDemo3/> */}
      {/* <MuiDemo1/>
      <MuiDemo2/> */}
      <MuiDemo3/>
      {/* <AddEmployee/> */}
      {/* <MenuBar/> */}



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
