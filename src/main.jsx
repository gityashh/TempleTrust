import React from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Admin from './components/Admin.jsx';
import Test from './components/Test.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import DashBoard from './components/DashBoard.jsx';
import Spend from './components/Spend.jsx';
import Addcause from './components/Addcause.jsx';
import Donate from './components/Donate.jsx';
import { UserProvider } from './UserContext.jsx';
import Web3 from 'web3';
import TempleDonation from './contracts/TempleDonation.json';

const Main = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    accounts: null,
    selectedAccount: null,
  });
  const [templeAddress, setTempleAddress] = useState('');

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Create Web3 instance using the local Ganache provider
          const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
          const web3 = new Web3(provider);
          
          // Ensure MetaMask is connected to the correct network (local Ganache)
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = TempleDonation.networks[networkId];
          console.log(web3);
          if (!deployedNetwork) {
            console.error("Contract not deployed on the current network");
            return;
          }

          // Create contract instance
          const contractInstance = new web3.eth.Contract(
            TempleDonation.abi,
            deployedNetwork.address
          );

          // Get accounts from MetaMask
          const accounts = await window.ethereum.request({ method: "eth_accounts" });

          setState({ web3: web3, contract: contractInstance, accounts: accounts });

        } catch (error) {
          console.error("Error connecting to MetaMask or Ganache:", error);
        }
      } else {
        console.error("MetaMask not detected");
      }
    };

    connectWallet();
  }, []);
  return (
    <React.StrictMode>
      <UserProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <App state={state} setState={setState}/>
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/adminsign" element={<Admin state={state} setState={setState}/>} />
            <Route path="/test" element={<Test />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/spend" element={<Spend />} />
            <Route path="/addcause" element={<Addcause />} />
            <Route path="/donate/:causeId" element={<Donate />} />
          </Routes>
        </Router>
      </UserProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
