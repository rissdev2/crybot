import React from 'react';

const History = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row pb-5">
                <div className="col-md-1"></div>
                <div className="col-md-10 bg-dark hist-sec py-3 px-3 rounded-3">
                    <h3>History</h3>
                <table class="table  table-borderless text-white">
  <thead>
    <tr>
      <th scope="col">Coin</th>
      <th scope="col">Invested</th>
      <th scope="col">Investment Date</th>
      <th scope="col">Closing Price</th>
      <th scope="col">Closing Date</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Tether USDT</td>
      <td className='bl-text'> $2340</td>
      <td>6 november, 2022</td>
      <td className='bl-text'>$3362</td>
      <td className='rd-text'>20 november,2022</td>
      <td className='main-color'>$1022</td>
    </tr>
    <tr>
      <td scope="row">Bitcoin BTC</td>
      <td className='bl-text'> $100</td>
      <td >1 november, 2022</td>
      <td className='bl-text'>$166</td>
      <td className='rd-text'>16 november,2022</td>
      <td  className='main-color'>$66</td>
    </tr>
    <tr>
      <td scope="row">Ethereum ETH</td>
      <td className='bl-text'> $742</td>
      <td>20 October, 2022</td>
      <td className='bl-text'>$1548</td>
      <td className='rd-text'>3 november,2022</td>
      <td  className='main-color'>$806</td>
    </tr>
    <tr>
      <td scope="row">Ripple XLA</td>
      <td className='bl-text'> $260</td>
      <td>20 October, 2022</td>
      <td className='bl-text'>$376</td>
      <td className='rd-text'>29 October,2022</td>
      <td  className='main-color'>$116</td>
    </tr>
  </tbody>
</table>  
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
        
        </>
    );
}

export default History;
