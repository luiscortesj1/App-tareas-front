import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
const URL = 'http://localhost:3001/api/'


const EditarTareas= ()=>{
    const [nombre, setNombre] = useState('')
    const [informacion, setInformacion] = useState('')
    const [prioridad, setPrioridad] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate() 
    const {id}=useParams()

    // actualizar 
    const update = async (e)=>{
        e.preventDefault()
        await axios.put(URL+id,{
            nombre: nombre, 
            informacion:informacion, 
            prioridad: prioridad, 
            status:status
        })
        navigate('/')
    }

    useEffect(()=>{
        getTareaId()
    },[])

    const getTareaId = async ()=>{
        const res= await axios.get(URL+id)
        setNombre(res.data.data.nombre)
        setInformacion(res.data.data.informacion)
        setPrioridad(res.data.data.prioridad)
        setStatus(res.data.data.status)
        
    }
    const optionsPrioridad = [
        { value: '1', label: 'Alta' },
        { value: '2', label: 'Media' },
        { value: '3', label: 'Baja' }
      ]
    const optionsStatus = [
        { value: '2', label: 'Incompleta' },
        { value: '1', label: 'Completa' }
       
      ]

     const SelectChange =(e)=>{
        console.log(e.value)
        setPrioridad(e.value)
     } 
     const SelectChangeStatus =(e)=>{
        console.log(e.value)
        setStatus(e.value)
     } 
    return(
        <>
          <div>
           <h3>Editar Tarea</h3>
           <form className="px-5" onSubmit={update}>
                <div className='mb-3 '>
                    <label className='form-label'>Nombre De La Tarea</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Informacion</label>
                    <textarea
                        value={informacion}
                        onChange={ (e)=> setInformacion(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> 
                 <div className='mb-3'>
                 
                    <label className='form-label'>Prioridad De La Tarea</label>
                    <Select value={prioridad}  options={optionsPrioridad} onChange={SelectChange} />
                 </div> 
                 <div className='mb-3 '>
                    
                 <Select value={status}  options={ optionsStatus} onChange={SelectChangeStatus} />
                 </div>   
                 <button type='submit' className='btn btn-primary'>Actualizar</button>                  
           </form>
           
        </div>  
        </>
    )

}
export default EditarTareas