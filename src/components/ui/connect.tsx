import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import { config } from "@/config/config";


const client = createThirdwebClient({
  clientId: "1b5c4b18cdfdaa4e1ce5f20346db85b8",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: ["email", "google", "apple", "facebook", "phone"],
    },
  }),
];

export default function Connect() {
  return (
    <ThirdwebProvider>
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={"dark"}
        connectModal={{ size: "wide" }}
      />
    </ThirdwebProvider>
  );
}
