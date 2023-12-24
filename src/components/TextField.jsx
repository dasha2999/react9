import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export const TextField = ({value, fieldName, handleChange}) => {
    return (
        <FormControl variant='standard'>
            <InputLabel> {fieldName} </InputLabel>
            <Input value={value} onChange={handleChange}/>
        </FormControl>
    )
}