import { useState, useEffect } from 'react'; //Video 73
//import { useEffect } from 'react/cjs/react.production.min';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); //Video 73
  const [paciente, setPaciente] = useState({}); //Video 82

  useEffect(() => { //Video 90
    const obtenerLS = () => {
    
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //JSON parse convierte un string en un array
      setPacientes(pacienteLS);
    }

    obtenerLS();
  }, [])

  useEffect(() => { //Video 89
    localStorage.setItem('pacientes', JSON.stringify( pacientes )); //JSON.stringify convertirá un arreglo en string
  }, [pacientes])

  const eliminarPaciente = id => { //Video 88
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);

    
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className=" mt-12 md:flex">
      <Formulario
          pacientes={pacientes} //Video 74*/
          setPacientes={setPacientes} //Video 74
          paciente={paciente} //Video 83
          setPaciente={setPaciente} //Video 87
        />
        
        <ListadoPacientes
          pacientes={pacientes} //Video 77
          setPaciente={setPaciente} //Video 82
          eliminarPaciente={eliminarPaciente} //88
        />
      </div>

    </div>

  )
}
export default App
