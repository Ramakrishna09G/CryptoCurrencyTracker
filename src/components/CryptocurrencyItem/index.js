// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyItem} = props
  const {
    id,
    currencyName,
    currencyLogo,
    euroValue,
    usdValue,
  } = cryptoCurrencyItem

  return (
    <li className="crypto-currency-item-container">
      <div className="crypto-currency-logo-and-name-card">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-card">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
