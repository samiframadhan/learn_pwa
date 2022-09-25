import React, {useEffect} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import ToDoList from './components/ToDoList';
import Register from './components/Register';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Abc from '@mui/icons-material/Abc';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, LogOut, reset } from './feature/authSlice';

export default function App() {
  const [state, setState] = React.useState(false);
  const {user, isSuccess} = useSelector((state)=> state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getMe())
  }, [dispatch]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
    console.log("Logout clicked")
  }

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
  console.log(isSuccess);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portofolio
          </Typography>
          
          <Button onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='tdlist' element={<ToDoList/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<p>There is nothing here: 404!</p>}/>
      </Routes>
    </Box>
  );
}