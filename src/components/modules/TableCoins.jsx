import TableRow from "./TableRow";

function TableCoins({ coins }) {
  
  console.log(coins);
  return (
    <div>
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
    </div>
  );
}

export default TableCoins;
