import React from "react";
import { ViewModelMovementList } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movements: ViewModelMovementList;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movements } = props;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell}`}>
        {movements.transaction.getDate()}/{movements.transaction.getMonth()}/
        {movements.transaction.getFullYear()}{" "}
      </span>
      <span className={`${classes.dataCell}`}>
        {movements.realTransaction.getDate()}/
        {movements.realTransaction.getMonth()}/
        {movements.realTransaction.getFullYear()}
      </span>
      <span className={`${classes.dataCell}`}>{movements.description}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movements.amount} €
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movements.balance} €
      </span>
    </div>
  );
};
