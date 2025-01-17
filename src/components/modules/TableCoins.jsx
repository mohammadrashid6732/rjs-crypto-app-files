import TableRow from "./TableRow";
import { CirclesWithBar } from "react-loader-spinner";

function TableCoins({ coins, loading }) {
  console.log(coins);
  return (
    <div>
      {loading ? (
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <td>Coin</td>
              <td>Name</td>
              <td>Price</td>
              <td>24h</td>
              <td>Total Volume</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;
