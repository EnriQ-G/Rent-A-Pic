import {useDispatch} from  'react-redux'
import { deleteComment } from '../features/comments/commentSlice'

const CommentItem = ({comment}) => {
    const dispatch = useDispatch()

return (
        <div className="tarea">
            <div>
                {new Date(comment.createdAt).toLocaleString('es-MX')}
                <h3>{comment.texto}</h3>
                <button className='close' onClick={()=>dispatch(deleteComment(comment._id))}>
                    borrar
                </button>
            </div>
        </div>
    )
}

export default CommentItem