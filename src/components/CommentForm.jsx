import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createComment} from '../features/comments/commentSlice'
import { useParams } from 'react-router-dom'

const CommentForm = () => {
    
    const [texto, setTexto] = useState('')
    const id  = useParams()
    const movie = id.id

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createComment(commentData))
        setTexto('')
    }

    const commentData = {
        texto,
        movie
    }


return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor="texto">Comment</label>
                <input 
                    type="text" 
                    name="texto" 
                    id="texto"
                    value={texto}
                    onChange={e => setTexto(e.target.value)} 
                    />
            </div>
            <div className='form-group'>
                <input type="submit" value="Agregar" className='btn btn-block' />
            </div>
        </form>
    </section>
    )
}

export default CommentForm