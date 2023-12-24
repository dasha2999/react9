import { Chip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export const Todo = ({handleDelete}) => {
    return (
        <Chip 
        clickable 
        label ='todo text'
        deleteIcon={<DeleteIcon/>}
        onDelete={handleDelete}
        />
    )
}