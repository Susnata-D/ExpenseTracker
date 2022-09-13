import Expenses from "./components/Expenses";

function App(){
  let expenses = [
    {
      id: 'e1',
      title: 'College Fees',
      amount: '$200',
      date: new Date(2022,8,5)
    },
    {
      id: 'e2',
      title: 'Electricity Bill',
      amount: '$500',
      date: new Date(2022,5,16)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: '$400',
      date: new Date(2022,7,23)
    },
    {
      id: 'e4',
      title: 'Groceries',
      amount: '$30',
      date: new Date(2022,4,2)
    },
    {
      id: 'e5',
      title: 'Clothes and Shoes',
      amount: '$1500',
      date: new Date(2022,3,3)
    }
  ]
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App