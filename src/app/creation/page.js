'use client';

import React from 'react';
import { Box } from '@mui/material';
import CompanyInfoPanel from '../../components/panel'
import GatewayMenu from '../../components/gateway';
import KeyboardShortcuts from '../../components/shortcuts';
// import { useRouter } from 'next/navigation';

const MainContent = () => {
  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      position: 'relative'
    }}>
      
      {/* Left side - Company Info Panel */}
      <CompanyInfoPanel />
     
      {/* Right side - Gateway of Tally Menu */}
      <Box sx={{
        width: '30%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '24px 8px 0 8px',
        backgroundColor: '#e6f2ff'
      }}>
        <GatewayMenu />
      </Box>
     
      {/* Right side keyboard shortcuts */}
      <KeyboardShortcuts />
    </Box>
  );
};

export default MainContent;