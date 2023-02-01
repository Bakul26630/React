import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { orange,grey } from '@mui/material/colors';

export default function AddButton(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1} }}  onClick={props.onSelect}>
      <Fab sx={{backgroundColor:orange[300] ,color:grey[50],"&:hover":{background:orange[500]}}} aria-label="add">
        <AddIcon/>
      </Fab>
    </Box>
  );
}
