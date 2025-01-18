import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { getCoinData } from "../../services/cryptoApi";
import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchCoin = async () => {
        const res = await fetch(getCoinData(page));
        const json = await res.json();
        console.log(json);
        setCoins(json);
        setLoading(false);
      };
      fetchCoin();
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <>
      <TableCoins coins={coins} loading={loading} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
