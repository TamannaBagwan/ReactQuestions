import { Button ,ButtonGroup , FormControlLabel,FormGroup,Checkbox,Alert} from '@mui/material'
import React from 'react' ;
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const MaterialUI = () => {
    return (
        <div>
            <button> Normal button </button>
            <Button variant="contained" size='large'>Text</Button>
            <Button variant="contained" size='small'>Contained</Button>
            <Button variant="contained">Outlined</Button>

            <ButtonGroup variant="contained" >
                <Button >One</Button>
                <Button >Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Language" />
  <FormControlLabel required control={<Checkbox />} label="Gender" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>

<h1> Home <HomeRoundedIcon/> </h1>
<Alert severity="error">This is an error alert — check it out!</Alert>
            
        </div>
    )
}

export default MaterialUI
