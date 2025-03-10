"use client"
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSupplyOpen, setIsSupplyOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('Karnataka');
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedSupply, setSelectedSupply] = useState('Karnataka');
  const [searchTerm, setSearchTerm] = useState('');
  const stateDropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const supplyDropdownRef = useRef(null);

  const indianStates = [
    'Not Applicable',
    'Andaman & Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra & Nagar Haveli and Daman & Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu & Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Other Territory',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal'
  ];

  const countries = [
    'India',
    'Afghanistan',
    'Australia',
    'Bangladesh',
    'Bhutan',
    'China',
    'Japan',
    'Malaysia',
    'Nepal',
    'Singapore',
    'Sri Lanka',
    'United Arab Emirates',
    'United Kingdom',
    'United States'
  ];

  const filteredStates = searchTerm 
    ? indianStates.filter(state => 
        state.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : indianStates;

  const filteredCountries = searchTerm 
    ? countries.filter(country => 
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  const toggleStateDropdown = () => {
    setIsStateOpen(!isStateOpen);
    setIsCountryOpen(false);
    setIsSupplyOpen(false);
    if (!isStateOpen) {
      setSearchTerm('');
    }
  };

  const toggleCountryDropdown = () => {
    setIsCountryOpen(!isCountryOpen);
    setIsStateOpen(false);
    setIsSupplyOpen(false);
    if (!isCountryOpen) {
      setSearchTerm('');
    }
  };

  const toggleSupplyDropdown = () => {
    setIsSupplyOpen(!isSupplyOpen);
    setIsStateOpen(false);
    setIsCountryOpen(false);
    if (!isSupplyOpen) {
      setSearchTerm('');
    }
  };

  const selectState = (state) => {
    setSelectedState(state);
    setIsStateOpen(false);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
  };

  const selectSupply = (state) => {
    setSelectedSupply(state);
    setIsSupplyOpen(false);
  };

  const handleClickOutside = (event) => {
    if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
      setIsStateOpen(false);
    }
    if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
      setIsCountryOpen(false);
    }
    if (supplyDropdownRef.current && !supplyDropdownRef.current.contains(event.target)) {
      setIsSupplyOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Party Details - National Enterprises</title>
        <meta name="description" content="State selection component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.topBar}>
        <div style={styles.leftHeader}>Party Details</div>
        <div style={styles.rightHeader}>National Enterprises</div>
      </div>

      <div style={styles.pageContainer}>
        <div style={styles.mainContent}>
          <div style={styles.partyDetailsContainer}>
            <div style={styles.partyDetailsHeader}>
              Party Details
            </div>
            
            <div style={styles.partyDetailsContent}>
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>Buyer (Bill to)</div>
                <div style={styles.detailValue}>: Ganeshji Industries</div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>Mailing Name</div>
                <div style={styles.detailValue}>: Ganeshji Industries</div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>Address</div>
                <div style={styles.detailValue}>
                  : No. 28, Hongasandra<br />
                  &nbsp;&nbsp;Hosur Main Road<br />
                  &nbsp;&nbsp;Bangalore
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>State</div>
                <div style={styles.detailValue} ref={stateDropdownRef}>
                  : <div 
                    style={styles.dropdownField}
                    onClick={toggleStateDropdown}
                  >
                    {selectedState}
                  </div>
                  
                  {isStateOpen && (
                    <div style={styles.listPanel}>
                      <div style={styles.listHeader}>
                        <div>List of States</div>
                        <div style={{marginRight: '15px'}}>
                          <button style={styles.newButton}>New State</button>
                        </div>
                      </div>
                      
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchInput}
                        placeholder="Search state..."
                        autoFocus
                      />
                      
                      <div style={styles.listContent}>
                        {filteredStates.map((state, index) => (
                          <div 
                            key={index}
                            style={{
                              ...styles.listItem,
                              ...(state === selectedState ? styles.selectedItem : {})
                            }}
                            onClick={() => selectState(state)}
                          >
                            {state === selectedState && <span style={styles.bulletPoint}>&#8226;</span>}
                            {state}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>Country</div>
                <div style={styles.detailValue} ref={countryDropdownRef}>
                  : <div 
                    style={styles.dropdownField}
                    onClick={toggleCountryDropdown}
                  >
                    {selectedCountry}
                  </div>
                  
                  {isCountryOpen && (
                    <div style={styles.listPanel}>
                      <div style={styles.listHeader}>
                        <div>List of Countries</div>
                        <div style={{marginRight: '15px'}}>
                          <button style={styles.newButton}>New Country</button>
                        </div>
                      </div>
                      
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchInput}
                        placeholder="Search country..."
                        autoFocus
                      />
                      
                      <div style={styles.listContent}>
                        {filteredCountries.map((country, index) => (
                          <div 
                            key={index}
                            style={{
                              ...styles.listItem,
                              ...(country === selectedCountry ? styles.selectedItem : {})
                            }}
                            onClick={() => selectCountry(country)}
                          >
                            {country === selectedCountry && <span style={styles.bulletPoint}>&#8226;</span>}
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>GSTIN/UIN</div>
                <div style={styles.detailValue}>: 29AIFPD2613R1Z0</div>
              </div>
              
              <div style={styles.detailRow}>
                <div style={styles.detailLabel}>Place of Supply</div>
                <div style={styles.detailValue} ref={supplyDropdownRef}>
                  : <div 
                    style={styles.dropdownField}
                    onClick={toggleSupplyDropdown}
                  >
                    {selectedSupply}
                  </div>
                  
                  {isSupplyOpen && (
                    <div style={styles.listPanel}>
                      <div style={styles.listHeader}>
                        <div>List of States</div>
                        <div style={{marginRight: '15px'}}>
                          <button style={styles.newButton}>New State</button>
                        </div>
                      </div>
                      
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchInput}
                        placeholder="Search state..."
                        autoFocus
                      />
                      
                      <div style={styles.listContent}>
                        {filteredStates.map((state, index) => (
                          <div 
                            key={index}
                            style={{
                              ...styles.listItem,
                              ...(state === selectedSupply ? styles.selectedItem : {})
                            }}
                            onClick={() => selectSupply(state)}
                          >
                            {state === selectedSupply && <span style={styles.bulletPoint}>&#8226;</span>}
                            {state}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.sidebar}>
          {/* Sidebar content goes here */}
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.reference}></div>
        <div style={styles.configButton}>F12: Configure</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    position: 'relative',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#8ecae6',
    color: 'white',
    padding: '4px 10px',
  },
  leftHeader: {
    fontWeight: 'bold',
  },
  rightHeader: {
    fontWeight: 'bold',
  },
  pageContainer: {
    display: 'flex',
    minHeight: 'calc(100vh - 70px)',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#8ecae6', // Dark blue sidebar
    borderLeft: ' #8ecae6',
  },
  partyDetailsContainer: {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    border: '1px solid #aaa',
    backgroundColor: 'white',
  },
  partyDetailsHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px',
    borderBottom: '1px solid #aaa',
  },
  partyDetailsContent: {
    padding: '15px',
  },
  detailRow: {
    display: 'flex',
    margin: '5px 0',
    position: 'relative',
  },
  detailLabel: {
    width: '120px',
    textAlign: 'right',
    paddingRight: '10px',
    fontWeight: 'normal',
  },
  detailValue: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  dropdownField: {
    backgroundColor: '#ffeeb0',
    border: '1px solid #aaa',
    padding: '2px 5px',
    width: '200px',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  listPanel: {
    position: 'fixed',
    top: 0,
    right: '250px', // Position it to the left of the existing sidebar which is 250px wide
    width: '300px',
    height: '100vh',
    backgroundColor: 'white',
    border: '1px solid #2c5898',
    zIndex: 90, // Lower z-index to ensure it stays behind the sidebar if needed
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c5898',
    color: 'white',
    padding: '5px 10px',
    fontWeight: 'bold',
  },
  newButton: {
    backgroundColor: 'white',
    border: 'none',
    padding: '2px 8px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  searchInput: {
    width: '100%',
    padding: '5px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    outline: 'none',
  },
  listContent: {
    overflowY: 'auto',
    flex: '1',
  },
  listItem: {
    padding: '5px 15px',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '14px',
  },
  selectedItem: {
    backgroundColor: '#ffc000',
  },
  bulletPoint: {
    position: 'absolute',
    left: '5px',
    color: 'black',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
  },
  reference: {
    color: '#444',
  },
  configButton: {
    color: '#444',
  },
};