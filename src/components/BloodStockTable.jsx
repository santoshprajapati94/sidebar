import React from 'react';
import { data } from '../lib/constants';
import { Blood_types } from '../lib/constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const BloodStockTable = () => {
    
  return (
    <>
    <TableContainer className='tblcont'  component={Paper} sx={{maxWidth:1535}}>
        <Table size="small"  stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
            <TableCell sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>Type</TableCell>
            {
                Object.keys(Blood_types).map((item, idx) => (
                    <TableCell key={idx} align="left">{Blood_types[item]}&nbsp;</TableCell>
                ))
            }
            </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               hover role="checkbox"
            >
                {
                    Object.keys(row).map((item,idx)=>(
                        <TableCell  className={row[item] < 10 && row[item] > 0 ? "modify-col" : null} key={idx} scope="row">{row[item] || "-"}</TableCell> 
                    ))
                }            
            </TableRow>
          ))}
        </TableBody>
        </Table>

    </TableContainer>
    </>
  )
}

export default BloodStockTable
