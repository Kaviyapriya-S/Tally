// "use client"
// import React, { useState } from 'react';
// import Head from 'next/head';

// export default function AccountingVoucherCreation() {
//   const [showLedgerAccounts, setShowLedgerAccounts] = useState(false);
//   const [selectedAccount, setSelectedAccount] = useState('');
  
//   const ledgerAccounts = [
//     "ABDUL KADAR TRADING (CR)",
//     "CA",
//     "CITY AGENCY (CR)",
//     "CITY MOON TRADING(DR)",
//     "CITY UNION BANK",
//     "HARITHA AGENCY (CR)",
//     "HIGH MOON TRADING (CR)",
//     "INDIAN BANK",
//     "JENI ENTERPRISES(DR)",
//     "JOSEPH ENTERPRISES (CR)",
//     "LUCKY GARAGE TRADING(DR)",
//     "LUCKY STAR ENTERPRISES (CR)",
//     "MODERN GARAGE (DR)",
//     "MOHAN AGENCY(DR)",
//     "NOOR ENTERPRISES (CR)",
//     "PAPITHA TRADING (CR)",
//     "POORVIKA AGENCY(DR)",
//     "RAZAAQ ENT(DR)",
//     "SAKTHI AGENCY AGENCY(DR)",
//     "SANGEETHA AGENCY(DR)",
//     "SARATHI TRADING(DR)",
//     "VETRI MOBILE TRADING (CR)",
//     "VICKY AGENCY(CR)"
//   ];

//   const functionKeys = [
//     { key: 'F2', label: 'List' },
//     { key: 'F3', label: 'Company' },
//     { key: 'F4', label: 'Contra' },
//     { key: 'F5', label: 'Payment' },
//     { key: 'F6', label: 'Receipt' },
//     { key: 'F7', label: 'Journal' },
//     { key: 'F8', label: 'Sales' },
//     { key: 'F9', label: 'Purchase' },
//     { key: 'F10', label: 'Other Vouchers' },
//     { key: 'E', label: 'Autofill' },
//     { key: 'H', label: 'Change Mode' },
//     { key: 'I', label: 'More Details' },
//     { key: 'O', label: 'Related Reports' },
//     { key: 'L', label: 'Optional' },
//     { key: 'T', label: 'Post-Dated' }
//   ];

//   const bottomKeys = [
//     { key: 'Q', label: 'Quit' },
//     { key: 'A', label: 'Accept' },
//     { key: 'D', label: 'Delete' },
//     { key: 'X', label: 'Cancel Vch' },
//     { key: 'F12', label: 'Configure' }
//   ];

//   // Function to handle selecting a ledger account
//   const handleSelectAccount = (account) => {
//     setSelectedAccount(account);
//     setShowLedgerAccounts(false);
//   };

//   return (
//     <>
//       <Head>
//         <title>Accounting Voucher Creation - Tally</title>
//         <style jsx global>{`
//           body {
//             margin: 0;
//             padding: 0;
//             font-family: Arial, sans-serif;
//             font-size: 12px;
//           }
//         `}</style>
//       </Head>
      
//       <div style={{ display: 'flex', height: '100vh', width: '100vw', position: 'relative' }}>
//         {/* Ledger Accounts Overlay - Shown when Party A/c name is focused */}
//         {showLedgerAccounts && (
//           <div style={{ 
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: '240px', // Leave space for the right sidebar
//             bottom: 0,
//             backgroundColor: 'rgba(0,0,0,0.5)',
//             zIndex: 10,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//             <div style={{ 
//               width: '80%',
//               maxHeight: '80%',
//               backgroundColor: 'white',
//               borderRadius: '4px',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//               display: 'flex',
//               flexDirection: 'column'
//             }}>
//               <div style={{ 
//                 backgroundColor: '#336699', 
//                 color: 'white', 
//                 padding: '4px 8px', 
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderTopLeftRadius: '4px',
//                 borderTopRightRadius: '4px'
//               }}>
//                 <span>List of Ledger Accounts</span>
//                 <button 
//                   style={{ 
//                     background: 'none', 
//                     border: 'none', 
//                     color: 'white', 
//                     cursor: 'pointer',
//                     fontSize: '16px'
//                   }}
//                   onClick={() => setShowLedgerAccounts(false)}
//                 >
//                   ×
//                 </button>
//               </div>
//               <div style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
//                 <button style={{ 
//                   backgroundColor: '#4a7ebb', 
//                   color: 'white', 
//                   padding: '2px 8px', 
//                   border: 'none',
//                   borderRadius: '2px'
//                 }}>Create</button>
//               </div>
//               <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
//                 {ledgerAccounts.map((account, index) => (
//                   <div 
//                     key={index} 
//                     style={{ 
//                       padding: '4px 8px', 
//                       cursor: 'pointer', 
//                       backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
//                       borderBottom: '1px solid #f0f0f0'
//                     }}
//                     onClick={() => handleSelectAccount(account)}
//                   >
//                     {account}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Main content */}
//         <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#f5f5f5' }}>
//           {/* Header */}
//           <div style={{ 
//             backgroundColor: '#336699', 
//             color: 'white', 
//             padding: '2px 4px', 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             fontSize: '12px'
//           }}>
//             <div>Accounting Voucher Creation</div>
//             <div style={{ textAlign: 'center', flex: 1 }}>PRIME STAR ENTERPRISES</div>
//             <div>×</div>
//           </div>
          
//           {/* Main form */}
//           <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
//             {/* Sales header */}
//             <div style={{ display: 'flex', backgroundColor: '#4a7ebb', color: 'white' }}>
//               <div style={{ 
//                 width: '112px', 
//                 padding: '2px 4px', 
//                 borderRight: '1px solid #6690c0' 
//               }}>Sales</div>
//               <div style={{ width: '64px', padding: '2px 4px' }}>No.</div>
//               <div style={{ width: '64px', padding: '2px 4px' }}>1</div>
//             </div>
            
//             {/* Form fields */}
//             <div style={{ 
//               padding: '8px', 
//               backgroundColor: '#e8f4e8', 
//               borderBottom: '1px solid #ccc'
//             }}>
//               <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
//                 <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Party A/c name :</div>
//                 <input 
//                   type="text" 
//                   style={{ 
//                     border: '1px solid #999', 
//                     backgroundColor: 'white', 
//                     padding: '2px', 
//                     width: '256px',
//                     height: '20px'
//                   }}
//                   value={selectedAccount}
//                   onChange={(e) => setSelectedAccount(e.target.value)}
//                   onFocus={() => setShowLedgerAccounts(true)}
//                 />
//               </div>
//               <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
//                 <div style={{ 
//                   width: '128px', 
//                   textAlign: 'right', 
//                   paddingRight: '8px', 
//                   color: '#777',
//                   fontStyle: 'italic'
//                 }}>Current balance :</div>
//                 <div style={{ padding: '2px' }}>-</div>
//               </div>
//               <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
//                 <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Sales ledger :</div>
//                 <div style={{ padding: '2px' }}>-</div>
//               </div>
//               <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
//                 <div style={{ 
//                   width: '128px', 
//                   textAlign: 'right', 
//                   paddingRight: '8px', 
//                   color: '#777',
//                   fontStyle: 'italic'
//                 }}>Current balance :</div>
//                 <div style={{ padding: '2px' }}>-</div>
//               </div>
//               <div style={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
//                 <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Name of Item</div>
//                 <div style={{ padding: '2px' }}></div>
//               </div>
//             </div>
            
//             {/* Display selected account */}
//             {selectedAccount && (
//               <div style={{ 
//                 padding: '8px', 
//                 backgroundColor: '#f0f0f0', 
//                 borderBottom: '1px solid #ccc'
//               }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px', fontWeight: 'bold' }}>Selected Account:</div>
//                   <div style={{ 
//                     padding: '2px 4px', 
//                     backgroundColor: '#e6f0ff', 
//                     border: '1px solid #ccc',
//                     borderRadius: '2px'
//                   }}>
//                     {selectedAccount}
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {/* Watermark */}
//             <div style={{ 
//               flex: 1, 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center',
//               position: 'relative'
//             }}>
//               <div style={{ 
//                 fontSize: '48px', 
//                 color: '#e0e0e0', 
//                 fontWeight: 'bold',
//                 position: 'absolute',
//                 zIndex: 0
//               }}></div>
//             </div>
            
//             {/* Narration */}
//             <div style={{ padding: '8px', display: 'flex' }}>
//               <div style={{ width: '80px' }}>Narration:</div>
//               <div style={{ flex: 1 }}></div>
//             </div>
            
//             {/* Bottom navigation */}
//             <div style={{ 
//               display: 'flex', 
//               borderTop: '1px solid #ccc', 
//               backgroundColor: '#e6e6e6'
//             }}>
//               {bottomKeys.map((item, index) => (
//                 <div key={index} style={{ 
//                   padding: '2px 4px', 
//                   borderRight: '1px solid #ccc', 
//                   display: 'flex'
//                 }}>
//                   <span style={{ color: '#666', marginRight: '4px' }}>{item.key}:</span>
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Right function keys sidebar - always visible */}
//         <div style={{ 
//           width: '240px', 
//           backgroundColor: '#e6f0ff', 
//           borderLeft: '1px solid #ccc',
//           display: 'flex',
//           flexDirection: 'column',
//           zIndex: 20 // Keep this above the overlay
//         }}>
//           <div style={{ 
//             position: 'relative', 
//             height: '60px', 
//             display: 'flex', 
//             justifyContent: 'flex-end',
//             alignItems: 'flex-start'
//           }}>
//             <img 
//               src="/api/placeholder/60/60" 
//               alt="Logo" 
//               style={{ 
//                 position: 'absolute',
//                 top: '4px',
//                 right: '4px'
//               }}
//             />
//           </div>
//           <div style={{ overflowY: 'auto', flex: 1 }}>
//             {functionKeys.map((item, index) => (
//               <div key={index} style={{ 
//                 display: 'flex', 
//                 padding: '4px', 
//                 borderBottom: '1px solid #ddd',
//                 backgroundColor: item.key === 'F8' ? '#f0f0f0' : 'transparent'
//               }}>
//                 <div style={{ width: '32px', color: '#336699', fontWeight: item.key === 'F8' ? 'bold' : 'normal' }}>{item.key}:</div>
//                 <div style={{ fontWeight: item.key === 'F8' ? 'bold' : 'normal' }}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AccountingVoucherCreation() {
  const [showLedgerAccounts, setShowLedgerAccounts] = useState(false);
  const [showSalesLedgerAccounts, setShowSalesLedgerAccounts] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [salesLedger, setSalesLedger] = useState('');
  const [activeSidebar, setActiveSidebar] = useState(''); // To track which sidebar is active
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ name: '', quantity: '', unit: 'Nos', rate: '', amount: 0 });
  const [editingItemId, setEditingItemId] = useState(null);
  const [totalAmount, setTotalAmount] = useState(7500.00);
  const [narration, setNarration] = useState('');
  const [voucherNumber, setVoucherNumber] = useState('1');
  const [voucherDate, setVoucherDate] = useState(getCurrentDate());
  
  function getCurrentDate() {
    const now = new Date();
    return `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
  }
  
  // Update total amount whenever items change
  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    setTotalAmount(total);
  }, [items]);
  
  const ledgerAccounts = [
    "ABDUL KADAR TRADING (CR)",
    "CA",
    "CITY AGENCY (CR)",
    "CITY MOON TRADING(DR)",
    "CITY UNION BANK",
    "GANESHJI INDUSTRIES",
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
    "SALES TAXABLE",
    "SANGEETHA AGENCY(DR)",
    "SARATHI TRADING(DR)",
    "VETRI MOBILE TRADING (CR)",
    "VICKY AGENCY(CR)"
  ];
  
  // Sales ledger accounts
  const salesLedgerAccounts = [
    "SALES NON-GST",
    "SALES TAXABLE",
    "SALES COMMON",
    "SALES EXPORT",
    "SERVICE SALES",
    "OTHER SALES",
    "DISCOUNT RECEIVED"
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
    setActiveSidebar('');
  };
  
  // Handle selecting a sales ledger
  const handleSelectSalesLedger = (ledger) => {
    setSalesLedger(ledger);
    setShowSalesLedgerAccounts(false);
    setActiveSidebar('');
  };
  
  // Function to calculate amount based on quantity and rate
  const calculateAmount = (quantity, rate) => {
    return quantity * rate;
  };
  
  // Add a new item to the list
  const addItem = () => {
    if (currentItem.name && currentItem.quantity && currentItem.rate) {
      const amount = calculateAmount(Number(currentItem.quantity), Number(currentItem.rate));
      const newItem = {
        id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
        name: currentItem.name,
        quantity: Number(currentItem.quantity),
        unit: currentItem.unit,
        rate: Number(currentItem.rate),
        amount
      };
      
      setItems([...items, newItem]);
      setCurrentItem({ name: '', quantity: '', unit: 'Nos', rate: '', amount: 0 });
    }
  };
  
  // Update an existing item
  const updateItem = () => {
    if (editingItemId && currentItem.name && currentItem.quantity && currentItem.rate) {
      const amount = calculateAmount(Number(currentItem.quantity), Number(currentItem.rate));
      const updatedItems = items.map(item => 
        item.id === editingItemId ? 
        { ...currentItem, amount, id: editingItemId } : 
        item
      );
      
      setItems(updatedItems);
      setCurrentItem({ name: '', quantity: '', unit: 'Nos', rate: '', amount: 0 });
      setEditingItemId(null);
    }
  };
  
  // Edit an existing item
  const editItem = (item) => {
    setCurrentItem({ ...item });
    setEditingItemId(item.id);
  };
  
  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    if (editingItemId === id) {
      setCurrentItem({ name: '', quantity: '', unit: 'Nos', rate: '', amount: 0 });
      setEditingItemId(null);
    }
  };
  
  // Handle input change for current item
  const handleItemChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'quantity' || name === 'rate') {
      const newItem = { ...currentItem, [name]: value };
      if (newItem.quantity && newItem.rate) {
        newItem.amount = calculateAmount(Number(newItem.quantity), Number(newItem.rate));
      }
      setCurrentItem(newItem);
    } else {
      setCurrentItem({ ...currentItem, [name]: value });
    }
  };
  
  // Function to open party ledger accounts sidebar
  const openPartyLedgerSidebar = () => {
    setShowLedgerAccounts(true);
    setShowSalesLedgerAccounts(false);
    setActiveSidebar('party');
  };
  
  // Function to open sales ledger accounts sidebar
  const openSalesLedgerSidebar = () => {
    setShowSalesLedgerAccounts(true);
    setShowLedgerAccounts(false);
    setActiveSidebar('sales');
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
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            padding: 4px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #f0f0f0;
          }
          .highlight:hover {
            background-color: #f5f5f5;
          }
          input:focus {
            outline: 2px solid #4a7ebb;
          }
        `}</style>
      </Head>
      
      <div style={{ display: 'flex', height: '100vh', width: '100vw', position: 'relative' }}>
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
              <div style={{ width: '64px', padding: '2px 4px' }}>
                <input 
                  type="text" 
                  value={voucherNumber}
                  onChange={(e) => setVoucherNumber(e.target.value)}
                  style={{ 
                    width: '32px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}></div>
              <div style={{ padding: '2px 4px' }}>
                <input 
                  type="text" 
                  value={voucherDate}
                  onChange={(e) => setVoucherDate(e.target.value)}
                  style={{ 
                    width: '80px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    textAlign: 'right'
                  }}
                />
              </div>
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
                  onFocus={openPartyLedgerSidebar}
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
                <input 
                  type="text" 
                  style={{ 
                    border: '1px solid #999', 
                    backgroundColor: 'white', 
                    padding: '2px', 
                    width: '256px',
                    height: '20px'
                  }}
                  value={salesLedger}
                  onChange={(e) => setSalesLedger(e.target.value)}
                  onFocus={openSalesLedgerSidebar}
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
            </div>
            
            {/* Item List Section */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              backgroundColor: 'white',
              overflowY: 'auto'
            }}>
              {/* Item Header */}
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Name of Item</th>
                    <th style={{ width: '15%', textAlign: 'right' }}>Quantity</th>
                    <th style={{ width: '10%', textAlign: 'center' }}>Unit</th>
                    <th style={{ width: '15%', textAlign: 'right' }}>Rate</th>
                    <th style={{ width: '20%', textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="highlight" onClick={() => editItem(item)}>
                      <td>{item.name}</td>
                      <td style={{ textAlign: 'right' }}>{item.quantity}</td>
                      <td style={{ textAlign: 'center' }}>{item.unit}</td>
                      <td style={{ textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                      <td style={{ textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                  
                  {/* Item input row */}
                  <tr>
                    <td>
                      <input 
                        type="text" 
                        name="name"
                        value={currentItem.name} 
                        onChange={handleItemChange}
                        placeholder="Enter item name"
                        style={{ 
                          width: '100%', 
                          padding: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        name="quantity"
                        value={currentItem.quantity} 
                        onChange={handleItemChange}
                        placeholder="Qty"
                        style={{ 
                          width: '90%', 
                          padding: '4px',
                          border: '1px solid #ccc',
                          textAlign: 'right'
                        }}
                      />
                    </td>
                    <td>
                      <select
                        name="unit"
                        value={currentItem.unit}
                        onChange={handleItemChange}
                        style={{ 
                          width: '100%', 
                          padding: '4px',
                          border: '1px solid #ccc',
                          textAlign: 'center'
                        }}
                      >
                        <option value="Nos">Nos</option>
                        <option value="Kg">Kg</option>
                        <option value="Mt">Mt</option>
                        <option value="Ltr">Ltr</option>
                        <option value="Box">Box</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        name="rate"
                        value={currentItem.rate} 
                        onChange={handleItemChange}
                        placeholder="Rate"
                        style={{ 
                          width: '90%', 
                          padding: '4px',
                          border: '1px solid #ccc',
                          textAlign: 'right'
                        }}
                      />
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {currentItem.amount.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold', paddingRight: '10px' }}>Total:</td>
                    <td style={{ textAlign: 'right', fontWeight: 'bold' }}>{totalAmount.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
              
              {/* Item Action Buttons */}
              <div style={{ padding: '8px', display: 'flex', gap: '8px' }}>
                <button 
                  onClick={editingItemId ? updateItem : addItem}
                  style={{
                    backgroundColor: '#4a7ebb',
                    color: 'white',
                    border: 'none',
                    padding: '4px 12px',
                    cursor: 'pointer'
                  }}
                >
                  {editingItemId ? 'Update Item' : 'Add Item'}
                </button>
                
                {editingItemId && (
                  <button 
                    onClick={() => deleteItem(editingItemId)}
                    style={{
                      backgroundColor: '#d9534f',
                      color: 'white',
                      border: 'none',
                      padding: '4px 12px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete Item
                  </button>
                )}
                
                {editingItemId && (
                  <button 
                    onClick={() => {
                      setCurrentItem({ name: '', quantity: '', unit: 'Nos', rate: '', amount: 0 });
                      setEditingItemId(null);
                    }}
                    style={{
                      backgroundColor: '#f0ad4e',
                      color: 'white',
                      border: 'none',
                      padding: '4px 12px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </div>
            
            {/* Provide e-invoice details */}
            <div style={{ 
              display: 'flex', 
              padding: '8px', 
              backgroundColor: '#f9f9f9',
              borderTop: '1px solid #ddd'
            }}>
              <div style={{ width: '128px', textAlign: 'right', paddingRight: '8px' }}>Provide e-invoice details :</div>
              <select
                style={{ 
                  padding: '2px',
                  border: '1px solid #ccc',
                  marginRight: '16px'
                }}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            {/* Narration */}
            <div style={{ padding: '8px', display: 'flex', backgroundColor: '#f9f9f9' }}>
              <div style={{ width: '80px', paddingTop: '4px' }}>Narration:</div>
              <textarea 
                style={{ 
                  flex: 1, 
                  height: '40px',
                  padding: '4px',
                  border: '1px solid #ccc'
                }}
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
              />
              <div style={{ width: '120px', marginLeft: '8px', marginTop: '4px' }}>
                <div style={{ textAlign: 'right', fontWeight: 'bold' }}>{totalAmount.toFixed(2)}</div>
              </div>
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
          zIndex: 20
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
        
        {/* Ledger Accounts sidebar - shown conditionally for Party A/c */}
        {showLedgerAccounts && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            right: '240px', // Position next to the function keys sidebar
            width: '200px',
            bottom: 0,
            backgroundColor: 'white',
            borderLeft: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 15
          }}>
            <div style={{ 
              backgroundColor: '#336699', 
              color: 'white', 
              padding: '4px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
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
                onClick={() => {
                  setShowLedgerAccounts(false);
                  setActiveSidebar('');
                }}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '4px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
              <button style={{ 
                backgroundColor: '#4a7ebb', 
                color: 'white', 
                padding: '2px 8px', 
                border: 'none',
                borderRadius: '2px',
                fontSize: '11px'
              }}>Create</button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {ledgerAccounts.map((account, index) => (
                <div 
                  key={index} 
                  style={{ 
                    padding: '4px 8px', 
                    cursor: 'pointer', 
                    fontSize: '11px',
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
        )}
        
        {/* Sales Ledger Accounts sidebar - shown conditionally */}
        {showSalesLedgerAccounts && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            right: '240px', // Position next to the function keys sidebar
            width: '200px',
            bottom: 0,
            backgroundColor: 'white',
            borderLeft: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 15
          }}>
            <div style={{ 
              backgroundColor: '#336699', 
              color: 'white', 
              padding: '4px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>List of Sales Accounts</span>
              <button 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'white', 
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onClick={() => {
                  setShowSalesLedgerAccounts(false);
                  setActiveSidebar('');
                }}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '4px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
              <button style={{ 
                backgroundColor: '#4a7ebb', 
                color: 'white', 
                padding: '2px 8px', 
                border: 'none',
                borderRadius: '2px',
                fontSize: '11px'
              }}>Create</button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {salesLedgerAccounts.map((account, index) => (
                <div 
                  key={index} 
                  style={{ 
                    padding: '4px 8px', 
                    cursor: 'pointer', 
                    fontSize: '11px',
                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
                    borderBottom: '1px solid #f0f0f0',
                    backgroundColor: account === "SALES TAXABLE" ? '#ffeb99' : (index % 2 === 0 ? '#f9f9f9' : 'white')
                  }}
                  onClick={() => handleSelectSalesLedger(account)}
                >
                  {account}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}