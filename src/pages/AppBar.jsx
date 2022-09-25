import React, {useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../feature/authSlice';

function AppBar() {
    const [state, setState] = React.useState(false);
    const {user} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState(open);
    }

    const handleButtons = (index) => {
        switch(index){
          case 0:
            return '/login';
          case 1:
            return '/profile';
          case 2:
            return '/tdlist';
          default:
            return '/';
        }
    }

    const list = () => (
        <Box 
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <List>
            {['Login', 'My Profile', 'To Do List', 'Another Page'].map((text, index) => (
              <ListItem key={index}>
                <ListItemButton href={handleButtons(index)}>
                  <ListItemIcon>
                    <Abc/>
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    );

    useEffect(()=>{
        dispatch(getMe())
    }, [dispatch])
    
    return (
        <div>
            {user && user.name}
        </div>
    )
}

export default AppBar