export type Plan = {
  name: string
  price: number
  discount: string
  text: string
  benefits: string[]
}

export const planItems: Plan[] = [
  {
    name: 'Basic',
    price: 799,
    discount: 'for 1 phone line w/AutoPay discount using an eligible payment method.',
    text: 'Get an unlimited phone plan with all the essential benefits you need including 5G access.',
    benefits: [
      'All the great benefits shown above',
      '50GB premium data1',
      '5G access included at no extra cost1',
      'Unlimited talk and text',
      '$5 disc. per line up to 6 lines w/AutoPay & eligible payment method.'
    ],
  },
  {
    name: 'Standard',
    price: 899,
    discount: 'for 1 phone line w/AutoPay discount using an eligible payment method.',
    text: 'New & existing customers always get the same device deals and can upgrade every two years',
    benefits: [
      'All the great benefits shown above',
      '50GB premium data1',
      '5G access included at no extra cost1',
      'Unlimited talk and text',
      '$5 disc. per line up to 6 lines w/AutoPay & eligible payment method.'
    ],
  },
  {
    name: 'Premium',
    price: 1099,
    discount: 'for 1 phone line w/AutoPay discount using an eligible payment method.',
    text: 'Upgrade your phone as often as every year. Enjoy great device deals for new & existing customers.',
    benefits: [
      'All the great benefits shown above',
      '50GB premium data1',
      '5G access included at no extra cost1',
      'Unlimited talk and text',
      '$5 disc. per line up to 6 lines w/AutoPay & eligible payment method.'
    ],
  },
]
