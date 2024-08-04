
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography } from '@mui/material';

const orders = [
  { customer: 'Anurag Srivastava', orderNo: '776777', amount: '$1300.00', status: 'Completed' },
  { customer: 'Walter White', orderNo: '19357', amount: '$1154.00', status: 'Completed' },
  { customer: 'Jane Cooper', orderNo: '87623', amount: '$2300.00', status: 'Pending' },
  { customer: 'Wade Warren', orderNo: '2328478', amount: '$1054.00', status: 'Completed' },
  { customer: 'Guy Hawkins', orderNo: '23677', amount: '$3400.00', status: 'Cancelled' },
  { customer: 'Walter White', orderNo: '028386', amount: '$1854.00', status: 'Completed' },
];

const RecentOrders= ()=> {
  return (
    <TableContainer>
      <Typography variant="h6" style={{ marginBottom: '10px', color: '#ffffff', textAlign:"start" }}>
        Recent Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: '#ffffff' }}>Customer</TableCell>
            <TableCell style={{ color: '#ffffff' }}>Order No</TableCell>
            <TableCell style={{ color: '#ffffff' }}>Amount</TableCell>
            <TableCell style={{ color: '#ffffff' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNo}>
              <TableCell style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: '10px' }}>{order.customer[0]}</Avatar>
                {order.customer}
              </TableCell>
              <TableCell style={{ color: '#fff' }}>{order.orderNo}</TableCell>
              <TableCell style={{ color: '#fff' }}>{order.amount}</TableCell>
              <TableCell style={{
                  color: order.status === 'Completed' ? '#00ff00' : order.status === 'Pending' ? 'Yellow' : 'red',
                }}>
                {order.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RecentOrders;
