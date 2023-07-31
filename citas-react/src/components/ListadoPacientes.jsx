import Paciente from "./Paciente"


// eslint-disable-next-line react/prop-types
function ListadoPacientes({pacientes, setPaciente}) {

  
  return (
  
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      
      {// eslint-disable-next-line react/prop-types
      pacientes && pacientes.length ? (
            <>
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
                        setPaciente={setPaciente}
                    /> 
                  )
                )}
            </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                  <p className="text-center text-lg mt-5 mb-10">Comienza agregando pacientes {''}
                    <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                  </p>
        </>
      )}

      

         
     
    </div>

  )
}

export default ListadoPacientes
