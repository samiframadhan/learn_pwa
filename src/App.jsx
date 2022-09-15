import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar } from '@mui/material';
import Projects from './components/Projects';
import School from './components/School';
import TempDrawer from './components/TempDrawer';


function createProject(nomor,
  nama, deskripsi, rentang, valuasi){
    return {nomor, nama, deskripsi, rentang, valuasi}
  }

const projectData = [
  createProject(1, "Loak Smart Table", "Membuat meja pintar terkoneksi dengan internet serta fitur premium seperti speaker, lampu RGB, hingga penjadwalan mati/nyala kelistrikan", "2019 - 2020", "Rp.20.000.000"),
  createProject(2, "Suafotobooth", "Photobooth modern dengan sistem self-service serta terkoneksi ke sistem penyimpanan cloud", "2022", "Rp.11.000.000"),
  createProject(3, "Autonomous Robot", "Robot dengan kecerdasan buatan yang dapat diperintahkan ke tempat yang diinginkan menggunakan teknologi LiDAR", "2019-2022", "Rp.50.000.000")
]

function createData(nomor, sekolah, tahun, pengalaman) {
    return {nomor, sekolah, tahun, pengalaman}
}

const rowdata = [
  createData(1, "SDN Gumuruh Utara", 2009, "Bermain"),
  createData(2, "SMPN 30 Bandung", 2013, "Belajar"),
  createData(3, "SMAN 3 Bandung", 2016, "Volunteer"),
  createData(4, "Universitas Padjadjaran", 2022, "Riset"),
]

export default function App() {

  return (
    <Box sx={{ flexGrow: 1}}>
      
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Typography my={4} variant='h3' align='center'>
              My Portfolio
            </Typography>
          </AppBar>
        </Box>
      </Container>
      <Container maxWidth="false">
        <Typography margin={5} variant='h4' align='left'>
          Sami Fauzan Ramadhan
        </Typography>
        <Typography my={4} variant='h6' align='left'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dicta iure porro nihil est, accusantium distinctio dignissimos ipsa qui voluptatibus? Qui distinctio totam earum provident voluptatibus et non fuga unde voluptate neque illo, libero quos quo id nesciunt aliquid iusto labore. Eveniet, suscipit sint, molestiae veniam atque nemo eligendi pariatur doloremque inventore odio harum, iure rem! Consequatur reiciendis delectus quaerat fuga obcaecati non libero. Pariatur fugiat dolor magni amet tenetur saepe nostrum aliquid perspiciatis, ratione illo laboriosam enim quisquam eaque tempore sit doloremque veritatis sed autem esse veniam blanditiis accusantium quibusdam perferendis deleniti! Ad, corporis? Ex, voluptatem! Veritatis, porro est?
        </Typography>
      </Container>
      <School rowdata={rowdata}/>
      <Projects projectData={projectData}/>
      <TempDrawer/>
    </Box>
  );
}
