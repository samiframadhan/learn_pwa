import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import React from 'react';

function TempDrawer() {
    const [state, setState] = React.useState({
        open: false
    })

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({
            open: open
        })
    }

    const list = () => {
        return(<Box
                sx={{width: 'auto', alignItems: 'center', justifyContent:'center'}}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {["Login", "Another Page", "To Do List", "On Going Projects"].map((text, index) => (
                        <ListItem  key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>)
    }
    return (
    <div>
        <Button sx={{}} onClick={toggleDrawer(true)}>Open Drawer</Button>
        <Drawer anchor='top' open={state.open} onClose={toggleDrawer(false)}>
            {list()}
        </Drawer>
    </div>
  )
}

export default TempDrawer