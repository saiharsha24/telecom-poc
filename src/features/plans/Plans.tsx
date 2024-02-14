import React from 'react';
import styles from './Plans.module.css'
import Card from "../../components/Card";
import {planItems} from './models'
import {useNavigate} from "react-router-dom";
import BillingData from '../../components/Billing.json';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectedPlan, setSelectedPlan } from '../../app/appslice';

const Plans = () => {
  const navigate = useNavigate()
  const selectedPlan = useAppSelector(selectSelectedPlan)
  const dispatch = useAppDispatch()

  const handleClick = (idx: number) => {
    const item = planItems[idx]
    if (selectedPlan?.name === item.name) {
      let json = BillingData[idx]
      navigate('/cart', {state: json})
    } else {
      dispatch(setSelectedPlan(item))
    }
    const plan = idx === 0 ? "Basic" : idx === 1 ? "Prime" : "Premium"; 
    sessionStorage.setItem("PlanName", JSON.stringify(plan));
  }

  return (
    <div className={styles.plans}>
      <div className={styles.cards}>
        {planItems.map((pi, idx) => <Card key={pi.name} item={pi} selected={pi.name === selectedPlan?.name}
                                          onclick={() => handleClick(idx)}/>)}
      </div>
    </div>
  );
};

export default Plans;
