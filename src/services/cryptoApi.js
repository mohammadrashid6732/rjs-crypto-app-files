const getCoinData = () => {
  const coin =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=false&locale=en";
  return coin;
};

export { getCoinData };
