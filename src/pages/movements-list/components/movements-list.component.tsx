import React, { ReactNode } from "react";

interface Props {
  balance : ReactNode;
}

export const MovementListHeaderComponent : React.FC<Props> = (props) => {

  const {balance} = props;

  return (
   <header>
    <h1>Saldos y Últimos movimientos</h1>
    <div>
      <span>SALDO DISPONIBLE</span>
      <span>{balance}</span>
    </div>
   </header>
  )
}