import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../feature/authSlice';

function Profile() {
    const {user, isError} = useSelector((state)=> state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        if(isError){
            navigate("/");
        }
    }, [isError, navigate]);

    useEffect(()=> {
        dispatch(getMe());
    }, [dispatch]);
    
    return (
        <div>
            <Typography paddingTop='100px' variant='h1' textAlign='center'>
                {user && user.name}
            </Typography>
            <Typography paddingX='100px' variant='h5'>
                Saya memiliki ambisi besar dalam membawa perubahan. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore laboriosam fuga laudantium quas dignissimos unde velit magnam! Laudantium, ipsa facilis harum tempore id neque accusantium magni facere nisi voluptas pariatur veniam reprehenderit vitae, doloribus soluta? Eveniet sit commodi impedit fuga cum quos eum, id possimus illum ipsum cupiditate deserunt officia nemo consectetur sapiente laudantium illo nostrum inventore saepe repellat dignissimos exercitationem doloribus numquam! Eveniet corporis labore praesentium perspiciatis officia vitae culpa maiores, obcaecati iure unde libero nihil veritatis, non facilis molestiae repellat iste, natus sit? Commodi animi saepe cupiditate repellendus. Aperiam quod nam necessitatibus quo, architecto sed at consectetur!
            </Typography>
        </div>
    )
}

export default Profile