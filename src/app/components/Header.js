// components/Header.js
"use client";
import Image from 'next/image';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from "react";
import styles from "../styles/Header.module.css";
import {PeraWalletConnect} from "@perawallet/connect"

const peraWallet = new PeraWalletConnect({
    // Default chainId is "4160"
    chainId: "416002"
});

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeAddress, setActiveAddress] = useState(null)

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const onConnectWallet = async () => {
      try {
        console.log('Attempting to connect')
        const accounts = await peraWallet.connect();
        console.log(accounts)
        peraWallet.connector?.on("disconnect", onDisconnectWallet);
        setActiveAddress(accounts[0]);
      } catch (error) {
        console.log(error)
      }
    }

    const onDisconnectWallet = () => {
      peraWallet.disconnect();
      setActiveAddress(null);
    }

    useEffect(() => {
      // Reconnect to the session when the component is mounted
      peraWallet.reconnectSession().then((accounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", onDisconnectWallet);
  
        if (peraWallet.isConnected && accounts.length) {
          setActiveAddress(accounts[0]);
        }
      }).catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <header className={styles.header}>
          <div className={styles.logocontainer}>
      <Image src="/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20}/>
        <h2 className={styles.highlight}>Aid <span className={styles.logo}>Tracker</span></h2>
        </div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#features">Features</a>
        <a href="#beneficiary">Beneficiaries</a>
        <a href="#donors">Donors</a>
      </nav>
        <button  
          className={styles.contactButton}
          onClick={() => {
            if (activeAddress) {
              onDisconnectWallet()
            } else {
              onConnectWallet()
            }
          }} 
          
        >
          {activeAddress ? `${activeAddress.slice(0, 10)}...` : 'Connect Wallet'}
        </button>
        <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#beneficiary">Beneficiaries</a></li>
        <li><a href="#donors">Donors</a></li>
        <button
          onClick={() => {
            if (activeAddress) {
              onDisconnectWallet()
            } else {
              onConnectWallet()
            }
          }} 
          className={styles.WalletButton}
        >
          {activeAddress ? `${activeAddress.slice(0, 10)}...` : 'Connect Wallet'}
        </button>
      </ul>
    </header>
  );
};

export default Header;
