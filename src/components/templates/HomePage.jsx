import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { getCoinData } from "../../services/cryptoApi";
import TableCoins from "../modules/TableCoins";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchCoin = async () => {
        const res = await fetch(getCoinData());
        const json = await res.json();
        console.log(json);
        setCoins(json);
        setLoading(false);
      };
      fetchCoin();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <TableCoins coins={coins} loading={loading} />
    </>
  );
}

export default HomePage;
