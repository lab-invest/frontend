import { InfoUserAndMoney, Wallets } from "~/components";

export default function myWallets() {
  return (
    <div className="flex flex-col gap-y-5 pt-5">
      <InfoUserAndMoney
        nameUser="Giovanna Bregantin"
        text="Carteiras de "
        walletValue={23}
        percentChange={3}
        textPts="Total das carteiras"
      />
      <div className="flex items-center justify-center bg-red-500 min-h-60">
        <p>local do grafico</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
      </div>
    </div>
  );
}
