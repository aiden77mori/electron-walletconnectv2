import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect-v2";

import { CHAINS } from "../data/networks";

const [mainnet, ...optionalChains] = Object.keys(CHAINS).map(Number);

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        projectId: "f1c43863a27bb0d14a801189c14e438c",
        chains: [mainnet],
        optionalChains,
        showQrModal: true
      }
    })
);
