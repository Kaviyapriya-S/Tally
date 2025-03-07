'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const ShortcutItem = ({ shortcutKey, label }) => {
  return (
    <Box sx={{
      display: 'flex',
      padding: '2px 4px',
      alignItems: 'center',
      borderBottom: '1px solid #a0a0a0'
    }}>
      <Typography sx={{
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: '8px'
      }}>
        {shortcutKey}:
      </Typography>
      <Typography sx={{
        fontSize: '12px'
      }}>
        {label}
      </Typography>
    </Box>
  );
};

const KeyboardShortcuts = () => {
  const shortcuts = [
    { key: 'F2', label: 'Date' },
    { key: 'F3', label: 'Company' }
  ];

  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: '#e6f2ff',
      border: '1px solid #a0a0a0',
      borderTop: 'none',
      borderRight: 'none'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        {shortcuts.map((shortcut, index) => (
          <ShortcutItem 
            key={index} 
            shortcutKey={shortcut.key} 
            label={shortcut.label} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default KeyboardShortcuts;

