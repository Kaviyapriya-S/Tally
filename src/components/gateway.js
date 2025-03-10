'use client';

import React from 'react';
import { Box ,Button} from '@mui/material';
import MenuOption from '../components/menuoption';
import { useRouter } from 'next/navigation';

const GatewayMenu = () => {
  const router = useRouter();
  const handleCreateClick = () => {
    router.push('/voucher');
   };
  return (
    <Box sx={{
      width: '280px',
      backgroundColor: '#e6f2ff',
      border: '1px solid #a0a0a0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <Box sx={{
        backgroundColor: '#4682B4',
        color: 'white',
        padding: '6px 0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px'
      }}>
        Gateway of Tally
      </Box>
     
      {/* MASTERS Section */}
      <MenuOption text="MASTERS" isSectionHeader={true} />
      <MenuOption text="Create" isHighlighted={true} onClick={ handleCreateClick } />
      <MenuOption text="Alter" />
      <MenuOption text="Chart of Accounts" />
     
      {/* TRANSACTIONS Section */}
      <MenuOption text="TRANSACTIONS" isSectionHeader={true} />
      <Button  isHighlighted={true} onClick={ handleCreateClick }>Voucher </Button> 
      <MenuOption text="Day Book" />
     
      {/* UTILITIES Section */}
      <MenuOption text="UTILITIES" isSectionHeader={true} />
      <MenuOption text="Banking" />
     
      {/* REPORTS Section */}
      <MenuOption text="REPORTS" isSectionHeader={true} />
      <MenuOption text="Balance Sheet" />
      <MenuOption text="Profit & Loss A/c" />
      <MenuOption text="Stock Summary" />
      <MenuOption text="Ratio Analysis" />
      <MenuOption text="Display More Reports" />
      <MenuOption text="Dashboard" />
     
      <Box sx={{ flexGrow: 1 }}></Box>
     
      <MenuOption text="Quit" />
    </Box>
  );
};

export default GatewayMenu;