// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrenciesList: []}

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()

    const formattedData = responseData.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({isLoading: false, cryptoCurrenciesList: formattedData})
  }

  render() {
    const {isLoading, cryptoCurrenciesList} = this.state

    return (
      <div className="crypto-currency-tracker-container">
        {isLoading ? (
          <div data-testid="loader" className="spinner">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrenciesList={cryptoCurrenciesList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
