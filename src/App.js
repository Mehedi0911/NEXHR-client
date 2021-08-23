import { Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DragDrop from "./components/DragDrop/DragDrop";
import Email from "./components/EmailForm/Email";
import Employees from "./components/Employees/Employees";
import ETable from "./components/EmployeeTable/ETable";
import Nav from "./components/Nav/Nav";
import Paginate from "./components/Paginate/Paginate";
import useStyles from './styles';
import axios from 'axios';
function App() {
  const classes = useStyles();
  const [view, setView] = useState('ADD');
  const [ recipients, setRecipients ] = useState([]);
  
  //pagination states
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

    // Get current employees
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(()=> {
    async function fetchData(){
      const res = await axios.get('http://localhost:5000/employees')
        setEmployees(res.data);
    }
    fetchData();
},[])

  return (
    <div className={classes.app}>
      <Nav />

      <Container className={classes.container}>
        <div className={classes.linksContainer}>
          <Typography component='p' className={classes.link} onClick={() => setView('ADD')}>
            Add Employees
          </Typography>
          <Typography component='p' className={classes.link} onClick={() => setView('TABLE')}>
            Employee List
          </Typography>
        </div>

        <hr className={classes.hr} />

        {
          view === 'TABLE' ?
            <div className={classes.itemContainer}>
              <ETable 
              recipients={recipients} 
              setRecipients={setRecipients}
              employees={currentEmployees} loading={loading}
              />
              <Paginate 
              employeesPerPage={employeesPerPage}
              totalEmployees={employees.length}
              paginate={paginate}
              />
              
              <Email recipients={recipients} setRecipients={setRecipients}/>
            </div> : <div className={classes.itemContainer}>
              <Employees />
              <DragDrop />
            </div>
        }


      </Container>
    </div>
  );
}

export default App;
