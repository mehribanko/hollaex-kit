import React from 'react';
import { oneOfType, arrayOf, shape, array, object, number, string } from 'prop-types';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import ReactSVG from 'react-svg';

import { ICONS, THEME_DEFAULT } from 'config/constants';
import STRINGS from 'config/localizedStrings';
import { formatToCurrency } from 'utils/currency';

const MarketList = ({ markets, handleClick }) => {

    const stroke = THEME_DEFAULT === 'dark' ? '#0066B4' : '#0000ff';

    return (
      <div className="market-list__container">
        <div className="market-list__block">
          <table className="market-list__block-table">
            <thead>
            <tr className="table-bottom-border">
              <th>Amount</th>
              <th>{STRINGS.PRICE}</th>
              <th>24h Change</th>
              <th>24h Volume</th>
              <th>24 Price Graph</th>
            </tr>
            </thead>
            <tbody>
            {markets.map((market, index) => {
              const {
                key,
                pair,
                symbol,
                pairTwo,
                ticker,
                increment_price,
                priceDifference,
                priceDifferencePercent,
              } = market;

              return (
                <tr
                  className="table-row table-bottom-border"
                  key={index}
                  onClick={() => handleClick(key)}
                >
                  <td>
                    <div className="d-flex align-items-center">
                      <ReactSVG
                        path={
                          ICONS[`${pair.pair_base.toUpperCase()}_ICON`]
                            ? ICONS[`${pair.pair_base.toUpperCase()}_ICON`]
                            : ICONS.DEFAULT_ICON
                        }
                        wrapperClassName="market-list__icons"
                      />
                      <div>
                        {symbol.toUpperCase()}/
                        {pairTwo.symbol ? pairTwo.symbol.toUpperCase() : ''}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="title-font ml-1">
												{formatToCurrency(ticker.close, increment_price)}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div
                        className={
                          priceDifference < 0
                            ? 'title-font price-diff-down trade-tab-price_diff_down'
                            : 'title-font trade-tab-price_diff_up price-diff-up'
                        }
                      >
                        {priceDifferencePercent}
                      </div>
                    </div>
                  </td>
                  <td>
                    {ticker.volume}
                  </td>
                  <td>
                    <div className="m-2">
                      <Sparklines data={[5, 10, 5, 20, 18, 21]}>
                        <SparklinesLine style={{ strokeWidth: 2, stroke, fill: "none",  }}/>
                      </Sparklines>
                    </div>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
}

MarketList.propTypes = {
  markets: oneOfType([
    arrayOf(shape({
      key: string,
      pair: object,
      symbol: string,
      pairTwo: object,
      ticker: object,
      increment_price: number,
      priceDifference: number,
      priceDifferencePercent: string,
    })),
    array
  ]).isRequired
};

export default MarketList;