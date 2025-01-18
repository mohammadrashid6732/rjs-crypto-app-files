import TableRow from "./TableRow";

import { CirclesWithBar } from "react-loader-spinner";
import styles from "../../styles/TableCoins.module.css";

function TableCoins({ coins, loading }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <CirclesWithBar
            height="300"
            width="300"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
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
