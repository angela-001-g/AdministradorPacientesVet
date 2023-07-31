import Paciente from "./Paciente"


// eslint-disable-next-line react/prop-types
function ListadoPacientes({pacientes}) {

  console.log(pacientes)
  return (
  
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-center text-lg mt-5 mb-10">Administra tus {''}
        <span className="text-indigo-600 font-bold">pacientes y citas</span>
      </p>

    
    { // eslint-disable-next-line react/prop-types
    pacientes.map( paciente => (
        // eslint-disable-next-line react/jsx-key
        <Paciente
            key={paciente.id}
            paciente={paciente}
        /> 
      )
    )}

         
     
    </div>

  )
}

export default ListadoPacientes
