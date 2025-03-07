"use client"
import React, { useState } from 'react';
import Head from 'next/head';

export default function AccountingVoucherCreation() {
  const [showLedgerAccounts, setShowLedgerAccounts] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('');
  
  const ledgerAccounts = [
    "ABDUL KADAR TRADING (CR)",
    "CA",
    "CITY AGENCY (CR)",
    "CITY MOON TRADING(DR)",
    "CITY UNION BANK",
    "HARITHA AGENCY (CR)",
    "HIGH MOON TRADING (CR)",
    "INDIAN BANK",
    "JENI ENTERPRISES(DR)",
    "JOSEPH ENTERPRISES (CR)",
    "LUCKY GARAGE TRADING(DR)",
    "LUCKY STAR ENTERPRISES (CR)",
    "MODERN GARAGE (DR)",
    "MOHAN AGENCY(DR)",
    "NOOR ENTERPRISES (CR)",
    "PAPITHA TRADING (CR)",
    "POORVIKA AGENCY(DR)",
    "RAZAAQ ENT(DR)",
    "SAKTHI AGENCY AGENCY(DR)",
    "SANGEETHA AGENCY(DR)",
    "SARATHI TRADING(DR)",
    "VETRI MOBILE TRADING (CR)",
    "VICKY AGENCY(CR)"
  ];

  const functionKeys = [
    { key: 'F2', label: 'List' },
    { key: 'F3', label: 'Company' },
    { key: 'F4', label: 'Contra' },
    { key: 'F5', label: 'Payment' },
    { key: 'F6', label: 'Receipt' },
    { key: 'F7', label: 'Journal' },
    { key: 'F8', label: 'Sales' },
    { key: 'F9', label: 'Purchase' },
    { key: 'F10', label: 'Other Vouchers' },
    { key: 'E', label: 'Autofill' },
    { key: 'H', label: 'Change Mode' },
    { key: 'I', label: 'More Details' },
    { key: 'O', label: 'Related Reports' },
    { key: 'L', label: 'Optional' },
    { key: 'T', label: 'Post-Dated' }
  ];

  const bottomKeys = [
    { key: 'Q', label: 'Quit' },
    { key: 'A', label: 'Accept' },
    { key: 'D', label: 'Delete' },
    { key: 'X', label: 'Cancel Vch' },
    { key: 'F12', label: 'Configure' }
  ];

  // Function to handle selecting a ledger account
  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    setShowLedgerAccounts(false);
  };

  return (
    <>
      <Head>
        <title>Accounting Voucher Creation - Tally</title>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            font-size: 12px;
          }
        `}</style>
      </Head>
      
      <div style={{ display: 'flex', height: '100vh', width: '100vw', position: 'relative' }}>
        {/* Ledger Accounts Overlay - Shown when Party A/c name is focused */}
        {showLedgerAccounts && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: '240px', // Leave space for the right sidebar
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ 
              width: '80%',
              maxHeight: '80%',
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                backgroundColor: '#336699', 
                color: 'white', 
                padding: '4px 8px', 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px'
              }}>
                <span>List of Ledger Accounts</span>
                <button 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'white', 
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                  onClick={() => setShowLedgerAccounts(false)}
                >
                  ×
                </button>
              </div>
              <div style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
                <button style={{ 
                  backgroundColor: '#4a7ebb', 
                  color: 'white', 
                  padding: '2px 8px', 
                  border: 'none',
                  borderRadius: '2px'
                }}>Create</button>
              </div>
              <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                {ledgerAccounts.map((account, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      padding: '4px 8px', 
                      cursor: 'pointer', 
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
                      borderBottom: '1px solid #f0f0f0'
                    }}
                    onClick={() => handleSelectAccount(account)}
                  >
                    {account}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#f5f5f5' }}>
          {/* Header */}
          <div style={{ 
            backgroundColor: '#336699', 
            color: 'white', 
            padding: '2px 4px', 
            display: 'flex', 
            justifyContent: 'space-between',
            fontSize: '12px'
          }}>
            <div>Accounting Voucher Creation</div>
            <div style={{ textAlign: 'center', flex: 1 }}>PRIME STAR ENTERPRISES</div>
            <div>×</div>
          </div>
          
          {/* Main form */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Sales header */}
            <div style={{ display: 'flex', backgroundColor: '#4a7ebb', color: 'white' }}>
              <div style={{ 
                width: '112px', 
                padding: '2px 4px', 
                borderRight: '1px solid #6690c0' 
              }}>Sales</div>
              <div style={{ width: '64px', padding: '2px 4px' }}>No.</div>
              <div style={{ width: '64px', padding: '2px 4px' }}>1</div>
            </div>
            
            {/* Form fields */}
            <div style={{ 
              padding: '8px', 
              backgroundColor: '#e8f4e8', 
              borderBottom: '1px solid #ccc'
            }}>
              <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Party A/c name :</div>
                <input 
                  type="text" 
                  style={{ 
                    border: '1px solid #999', 
                    backgroundColor: 'white', 
                    padding: '2px', 
                    width: '256px',
                    height: '20px'
                  }}
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                  onFocus={() => setShowLedgerAccounts(true)}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                <div style={{ 
                  width: '128px', 
                  textAlign: 'right', 
                  paddingRight: '8px', 
                  color: '#777',
                  fontStyle: 'italic'
                }}>Current balance :</div>
                <div style={{ padding: '2px' }}>-</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Sales ledger :</div>
                <div style={{ padding: '2px' }}>-</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                <div style={{ 
                  width: '128px', 
                  textAlign: 'right', 
                  paddingRight: '8px', 
                  color: '#777',
                  fontStyle: 'italic'
                }}>Current balance :</div>
                <div style={{ padding: '2px' }}>-</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Name of Item</div>
                <div style={{ padding: '2px' }}></div>
              </div>
            </div>
            
            {/* Display selected account */}
            {selectedAccount && (
              <div style={{ 
                padding: '8px', 
                backgroundColor: '#f0f0f0', 
                borderBottom: '1px solid #ccc'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px', fontWeight: 'bold' }}>Selected Account:</div>
                  <div style={{ 
                    padding: '2px 4px', 
                    backgroundColor: '#e6f0ff', 
                    border: '1px solid #ccc',
                    borderRadius: '2px'
                  }}>
                    {selectedAccount}
                  </div>
                </div>
              </div>
            )}
            
            {/* Watermark */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{ 
                fontSize: '48px', 
                color: '#e0e0e0', 
                fontWeight: 'bold',
                position: 'absolute',
                zIndex: 0
              }}></div>
            </div>
            
            {/* Narration */}
            <div style={{ padding: '8px', display: 'flex' }}>
              <div style={{ width: '80px' }}>Narration:</div>
              <div style={{ flex: 1 }}></div>
            </div>
            
            {/* Bottom navigation */}
            <div style={{ 
              display: 'flex', 
              borderTop: '1px solid #ccc', 
              backgroundColor: '#e6e6e6'
            }}>
              {bottomKeys.map((item, index) => (
                <div key={index} style={{ 
                  padding: '2px 4px', 
                  borderRight: '1px solid #ccc', 
                  display: 'flex'
                }}>
                  <span style={{ color: '#666', marginRight: '4px' }}>{item.key}:</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right function keys sidebar - always visible */}
        <div style={{ 
          width: '240px', 
          backgroundColor: '#e6f0ff', 
          borderLeft: '1px solid #ccc',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 20 // Keep this above the overlay
        }}>
          <div style={{ 
            position: 'relative', 
            height: '60px', 
            display: 'flex', 
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}>
            <img 
              src="/api/placeholder/60/60" 
              alt="Logo" 
              style={{ 
                position: 'absolute',
                top: '4px',
                right: '4px'
              }}
            />
          </div>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {functionKeys.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                padding: '4px', 
                borderBottom: '1px solid #ddd',
                backgroundColor: item.key === 'F8' ? '#f0f0f0' : 'transparent'
              }}>
                <div style={{ width: '32px', color: '#336699', fontWeight: item.key === 'F8' ? 'bold' : 'normal' }}>{item.key}:</div>
                <div style={{ fontWeight: item.key === 'F8' ? 'bold' : 'normal' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}