
export default function correctName (title) {
  let CorrectName = title
  switch (title) {
    case 'sekkeh':
      CorrectName = 'سکه'
      break;
    case 'eur':
      CorrectName = 'یورو'
      break;
    case 'usd_buy':
      CorrectName = 'دلار'
      break;
    case 'bahar':
      CorrectName = 'سکه بهار آزادی'
      break;
    case 'btc':
      CorrectName = 'بیتکوین'
      break;
    default:
      CorrectName = title
      break;
  }
  return CorrectName
}