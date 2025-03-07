'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const MenuOption = ({ text, isHighlighted, isSectionHeader }) => {
  if (isSectionHeader) {
    return (
      <Box sx={{
        backgroundColor: '#e6f2ff',
        color: '#666',
        padding: '4px 0',
        textAlign: 'center',
        fontSize: '12px'
      }}>
        {text}
      </Box>
    );
  }

  return (
    <Box sx={{
      backgroundColor: isHighlighted ? '#FFD700' : 'transparent',
      padding: '4px 0',
      textAlign: 'center',
      cursor: 'pointer',
      '&:hover': { backgroundColor: isHighlighted ? '#FFD700' : '#f5f5f5' }
    }}>
      <Typography sx={{ fontSize: '14px' }}>{text}</Typography>
    </Box>
  );
};

export default MenuOption;