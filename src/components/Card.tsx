import React from 'react';
import styles from './Card.module.css'
import {Plan} from "../features/plans/models";
import { TagIcon } from '@heroicons/react/24/outline'

type Props = {
  item: Plan,
  selected: boolean,
  onclick: () => void
}

const Card = ({ item, selected, onclick }: Props) => {
  return (
    <div className={styles.card}>
      {selected && (
        <div className={styles.selected}>You selected this plan</div>
      )}
      <div className={`${styles.container} ${selected ? styles.isSelected : ''}`}>
        <div className={styles.discount}>
          <TagIcon className={styles.tagIcon}/>
          <span>Get a Special DISCOUNT for new customers</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{item.name}</h2>
          <div className={styles.priceDetail}>
            <sup>Rs</sup>
            <h2 className={styles.price}>{item.price}</h2>
            <span>/year</span>
          </div>
          <p className={styles.subtext}>{item.discount}</p>
          <div className={styles.taxes}>Taxes and Fees included</div>
          <p>{item.text}</p>
          <h3>Includes:</h3>
          <ul>{item.benefits.map((ib) => <li key={ib}>{ib}</li>)}</ul>
          <button className={styles.cardButton} onClick={onclick}>{selected ? 'Go To Cart' : 'Select Plan'}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
