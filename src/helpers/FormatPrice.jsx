import React from 'react'

export default function FormatPrice(props) {

    const formatter = new Intl.NumberFormat('en-PK', {style: 'currency', currency: 'PKR', maximumFractionDigits: 0});
    const pkrCurrency = formatter.format(props.price*100);

  return (
    <div>{pkrCurrency}</div>
  )
}
