import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:3001/api/'

const CompShowTareas = () => {
    const [tareas, setTareas]= useState([])

    useEffect(() =>{
        getTareas()
    },[])
     // ver todos los registros
    const getTareas= async()=>{
       const response= await axios.get(URL)
       console.log(response.data)
       setTareas(response.data.data)
    }
    //delete Registros
    const eliminarTareas= async(id)=>{
        await axios.delete(`${URL}${id}`)
        getTareas()
    }

    return(
        <>
        <h1 className="mt-1 mb-2 ">Listado De Tareas</h1>
          <div className="container">
            <div className="row">
                <div className="col">
                <Link to={`/create`} className='btn btn-primary mb-2 mt-2'>Nueva Tarea</Link>
                    <table className="table table-borderless ">
                        <thead className="">
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha Creación</th>
                        <th>Fecha Modificación</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                        </thead>
                        <tbody>
                        { tareas.map ( (tarea) => (
                                <tr key={tarea.id}> 
                                <td>{tarea.nombre}</td>
                                <td>{tarea.informacion}</td>
                                <td>{tarea.fechaCreacion}</td>
                                <td>{tarea.fechaModificacion}</td> 
                                <td>{tarea.prioridad.nombre}</td>
                                <td>{tarea.status.nombre}</td>
                                <td>
                                <Link to={`/edit/${tarea.id}`} className='btn btn-info mb-1'>Editar</Link>
                                </td>
                                <td>
                                <button onClick={() =>eliminarTareas(tarea.id)} className="btn btn-danger">Eliminar</button>
                                </td>
                                </tr>
                            )) }
                        </tbody>
                     </table>
                </div>
            </div>
          </div>  
        </>
    )
}
export default CompShowTareas