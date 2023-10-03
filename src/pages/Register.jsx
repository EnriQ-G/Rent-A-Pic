import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {FaUser} from "react-icons/fa"
import {register, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    isAdmin: false
  })

  const onChange = (e) => (
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  )

  const { name, email, password, password2, isAdmin } = formData
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if (isError){
      toast.error(message)
    } if(isSuccess || user){
      toast.success(message)
      navigate("/login")
    } 
    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error("Las contraseñas no coinciden")
    } else {
      const userData = {
        name, email, password, isAdmin
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <section className="heading">
        <h4>
         <FaUser/> Registrar un nuevo usuario
        </h4>
        <p>Por favor crea una cuenta</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="name"
              name="name"
              value={name}
              placeholder="Nombre de usuario"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Correo electrónico"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Contraseña"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirmar contraseña"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Register
