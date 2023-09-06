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

const FormatDate = (dateStr)=> {

  const date = new Date(dateStr.date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormatted = date.toLocaleDateString(undefined, options);
  const timeFormatted = date.toLocaleTimeString();

  return (
    <>
      <p>{dateFormatted}</p>
      <p>{timeFormatted}</p>
    </>
  )
}

function maskPassword(password) {
  return '⚹'.repeat(password.length);
}

export { truncate, getWordStr, FormatPrice, capitalize, FormatDate, maskPassword };
