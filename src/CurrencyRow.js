import React from "react";

export default function CurrencyRow(props) {
  const { currencyOptions, selectCurrency, onChangeCurrency, amount,onChangeAmount } = props;

  return (
    <div>
      <input className="input" type="number" value={amount} onChange={onChangeAmount}/>
      <select name="" id="" value={selectCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
