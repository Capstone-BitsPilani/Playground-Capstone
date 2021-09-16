import React from 'react';
import Box from '@material-ui/core/Box';
import './MyShapes.css';

const defaultProps = {
  borderColor: 'black',
  m: 1,
  border: 1,
  style: { width: '10rem', height: '10rem' },
};

export default function MyShape() {
  return (
    <Box display="flex" justifyContent="center">
      <div className='circle'><p className='text'>23</p></div>
      <Box borderRadius="50%" className='bg' {...defaultProps}> 20 </Box>
      <Box borderRadius="borderRadius" {...defaultProps} />
      <Box borderRadius={16} {...defaultProps} />
    </Box>
  );
}