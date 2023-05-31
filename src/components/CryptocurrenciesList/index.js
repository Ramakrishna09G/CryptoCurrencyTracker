// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem/index'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesList} = props

  return (
    <div className="crypto-currencies-list-bg-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-image"
      />
      <ul className="crypto-currency-items-container">
        <li className="crypto-currency-items-nav-bar">
          <h1 className="coin-type">Coin Type</h1>
          <div className="usd-and-euro-card">
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </div>
        </li>
        {cryptoCurrenciesList.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} cryptoCurrencyItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
