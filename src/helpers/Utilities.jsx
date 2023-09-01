function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

function getWordStr(str) {
  return str.split(/\s+/).slice(0, 5).join(" ");
}

function FormatPrice(props) {
  const pkrCurrency = Intl.NumberFormat("ur-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 2,
  }).format(props.price * 100);

  return <span>{pkrCurrency}</span>;
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

export { truncate, getWordStr, FormatPrice, capitalize };
