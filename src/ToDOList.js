import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const ToDOList = (props) => {

    return (
        <>
                <div className="todo">
                <div className="icon">
                     <EditIcon className="EditIcon"  fontSize="small"   onClick={()=>(
                        props.onEdit(props.id)
                        )}/>
                    <DeleteIcon className="EditIcon" fontSize="small" onClick={()=>(
                        props.onSelect(props.id)
                        )}/>
                     </div>
                     <li>{props.text}</li>
                     
                </div>
        </>
    )
}

export default ToDOList
