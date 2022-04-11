const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
         Swal.fire({
            title: '¿Estás seguro de eliminar este paciente?',
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(220 38 38)',
            cancelButtonColor: 'rgb(79 70 229)',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id); //J_Torres
                Swal.fire(
                '¡Eliminado!',
                'Haz eliminado a este paciente',
                'success'
              )
            }
          })
    }

  return (
    <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10" /*ideo 81 */> 
            <button
                className=" py-2 px-10 md:py-2 md:px-2 lg:py-2 lg:px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)} //Video 82
            >Editar</button>

            <button
                className="py-2 px-10 md:py-1.5 md:px-1.5 lg:py-2 lg:px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar} // Video88
            >Eliminar</button>
        
        </div>
    </div>
  )
}
export default Paciente;
