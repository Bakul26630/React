import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { orange,grey } from '@mui/material/colors';

export default function DeleteButton(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={props.onSelect}>
      <Fab size="small" sx={{backgroundColor:grey[50] ,color:orange[300],"&:hover":{color:orange[500]}}} aria-label="delete">
        <DeleteOutlineIcon/>
      </Fab>
    </Box>
  );
}
