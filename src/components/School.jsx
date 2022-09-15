import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

function School(props) {
  return (
    <Container maxWidth="md">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>No</TableCell>
            <TableCell align='center'>Sekolah</TableCell>
            <TableCell align='center'>Tahun</TableCell>
            <TableCell align='center'>Pengalaman</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rowdata.map((row) => (
            <TableRow key={row.nomor}>
              <TableCell align='center'>{row.nomor}</TableCell>
              <TableCell align='center'>{row.sekolah}</TableCell>
              <TableCell align='center'>{row.tahun}</TableCell>
              <TableCell align='center'>{row.pengalaman}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default School