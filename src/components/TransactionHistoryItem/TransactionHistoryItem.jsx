export default function TransactionHistoryItem({item: item}) {
    console.log(item)
    return (
    <>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
    )
}