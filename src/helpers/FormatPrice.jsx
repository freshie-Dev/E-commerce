import React from 'react'

export default function FormatPrice(props) {


       const pkrCurrency = Intl.NumberFormat("ur-PK",{
    
        style:"currency",
    
        currency:"PKR",
    
        maximumFractionDigits:0,
    
      }).format(props.price*100);
    
    

  return (
    <span>{pkrCurrency}</span>
  )
}
