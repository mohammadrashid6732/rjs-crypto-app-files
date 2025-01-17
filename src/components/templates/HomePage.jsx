import { useEffect, useState } from "react";
import { getCoinData } from "../../services/cryptoApi";
import TableCoins from "../modules/TableCoins";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const res = await fetch(getCoinData());
      const json = await res.json();
      console.log(json);
      setCoins(json);
    };
    fetchCoin();
  }, []);
  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  );
}

export default HomePage;
