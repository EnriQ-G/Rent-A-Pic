import {useDispatch} from  'react-redux'
import { deleteComment } from '../features/comments/commentSlice'

const CommentItem = ({comment}) => {
    const dispatch = useDispatch()

return (
        <div className="tarea">
            <div>
                <button className='close' onClick={()=>dispatch(deleteComment(comment._id))}>
                    X
                </button>
                Creado en: {new Date(comment.createdAt).toLocaleString('es-MX')}
                <p>Usuario: {comment.user}</p>
                <h3>Reseña: {comment.texto}</h3>
            </div>
        </div>
    )
}

export default CommentItem