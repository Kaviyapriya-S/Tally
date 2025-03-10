"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TallyPrimeNavbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('G: Go To');

  const topMenuItems = [
    { id: 'K: Company', label: 'K: Company' },
    { id: 'Y: Data', label: 'Y: Data' },
    { id: 'Z: Exchange', label: 'Z: Exchange' },
    { id: 'G: Go To', label: 'G: Go To' },
    { id: 'O: Import', label: 'O: Import' },
    { id: 'E: Export', label: 'E: Export' },
    { id: 'M: E-mail', label: 'M: E-mail' },
    { id: 'P: Print', label: 'P: Print' },
    { id: 'F1: Help', label: 'F1: Help' }
  ];

  const TitleBar = styled(Box)({
    backgroundColor: '#1A4B9C',
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    padding: '0 8px',
    alignItems: 'center'
  });

  const MenuBar = styled(Box)({
    backgroundColor: '#1A4B9C',
    display: 'flex',
    justifyContent: 'space-around', // Ensures even spacing
    height: '25px',
    borderBottom: '1px solid #3A6BC5',
    padding: '0 16px' // Increased padding for alignment
  });

  const MenuButton = styled(Box)(({ theme }) => ({
    color: 'white',
    fontSize: '0.75rem',
    padding: '0 12px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&[data-active="true"]': {
      backgroundColor: '#3A6BC5',
    }
  }));
  

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Title Bar */}
      <TitleBar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
           
            <Typography variant="body1" sx={{ color: '#FFD700', fontWeight: 'bold', lineHeight: 1 }}>
            TallyPrime GOLD
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'white' }}>
              Gateway of Tally
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ ml: 6, fontSize: '0.7rem', fontWeight: 'bold', color: 'white' }}>
            MANAGE
          </Typography>
        </Box>
      </TitleBar>

      {/* Menu Bar */}
      <MenuBar>
        {topMenuItems.map((item) => (
         <MenuButton 
         key={item.id}
         data-active={selectedMenuItem === item.id}
         onClick={() => setSelectedMenuItem(item.id)}
       >
         {item.label}
       </MenuButton>
       
       
       
        ))}
      </MenuBar>
    </Box>
  );
};

export default TallyPrimeNavbar;
