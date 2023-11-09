import { Web3ReactHooks } from '@web3-react/core';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect-v2';

import { hooks as networkHooks, network } from './network';
import { hooks as walletConnectHooks, walletConnect } from './walletConnect';

const connectors: [WalletConnect | Network, Web3ReactHooks][] = [
  [walletConnect, walletConnectHooks],
  [network, networkHooks],
];

export default connectors;
