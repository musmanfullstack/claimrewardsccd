// hooks/useConcordiumWallet.ts
'use client'
import { useState } from 'react';
import { connect, getJsonRpcClient } from '@concordium/browser-wallet-api-helpers';

export const useConcordiumWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      // Request connection to the Concordium Wallet
      const accountAddress = await connect();
      setAccount(accountAddress);
      setConnected(true);
    } catch (error) {
      console.error('Failed to connect to Concordium Wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setConnected(false);
  };

  return {
    connectWallet,
    disconnectWallet,
    account,
    connected,
  };
};
