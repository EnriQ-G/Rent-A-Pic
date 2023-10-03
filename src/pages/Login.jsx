import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {login, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"
import {FaSignInAlt} from "react-icons/fa"

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const onChange = (e) => (
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  )

  const { email, password} = formData
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if (isError){
      toast.error(message)
    } if(isSuccess || user){
      // toast.success(message)
      navigate("/")
    } 
    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])


  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email, password
    }
    dispatch(login(userData))

  }

  if (isLoading) return <Spinner />


  return (
    <>
      <section className="heading">
        <p><FaSignInAlt/> Por favor ingresa tu información</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id="email"
              name="email"
              value={email}
              placeholder="Email"
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
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </section>
    </>
  )
}


export default Login
