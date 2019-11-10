import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import i18n from "./i18n";
// import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import { ethers } from "ethers";

import connectors from "./components/common/connectors";

import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";



render(
  <I18nextProvider i18n={i18n}>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
    <Router>
      <App />
    </Router>
  </Web3Provider>
  </I18nextProvider>,
  document.getElementById("app")
);

function MyComponent() {
  const context = useWeb3Context();

  console.log(context);

  if (context.error) {
    console.error("Error!");
  }

  // if (context.active && context.connectorName === "WalletConnect") {
  //   if (!context.account) {
  //     WalletConnectQRCodeModal.open(
  //       context.connector.walletConnector.uri,
  //       () => {}
  //     );
  //   } else {
  //     try {
  //       WalletConnectQRCodeModal.close();
  //     } catch {}
  //   }
  // }

  const [transactionHash, setTransactionHash] = React.useState();

  function sendTransaction() {
    const signer = context.library.getSigner();

    signer
      .sendTransaction({
        to: ethers.constants.AddressZero,
        value: ethers.utils.bigNumberify("0")
      })
      .then(({ hash }) => {
        setTransactionHash(hash);
      });
  }

  return (
    <React.Fragment>
      <h3>Use one of the methods </h3>

      <Web3ConsumerComponent />

      {context.error && (
        <p>An error occurred, check the console for details.</p>
      )}

      {Object.keys(connectors).map(connectorName => (
        <button
          key={connectorName}
          disabled={context.connectorName === connectorName}
          onClick={() => context.setConnector(connectorName)}
        >
          Activate {connectorName}
        </button>
      ))}

      <br />
      <br />

      {(context.active || (context.error && context.connectorName)) && (
        <button onClick={() => context.unsetConnector()}>
          {context.active ? "Deactivate Connector" : "Reset"}
        </button>
      )}

      {context.active && context.account && !transactionHash && (
        <button onClick={sendTransaction}>Send Dummy Transaction</button>
      )}

      {transactionHash && <p>{transactionHash}</p>}
    </React.Fragment>
  );
}

function Web3ConsumerComponent() {
  return (
    <Web3Consumer>
      {context => {
        const { active, connectorName, account, networkId } = context;
        return (
          active && (
            <React.Fragment>
              <p>Active Connector: {connectorName}</p>
              <p>Account: {account || "None"}</p>
              <p>Network ID: {networkId}</p>
            </React.Fragment>
          )
        );
      }}
    </Web3Consumer>
  );
}
