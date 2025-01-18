const BASE_URL = "https://api.coingecko.com/api/v3";

const getCoinData = (page) => {
  const coin = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}`;
  return coin;
};

export { getCoinData };
