import PaymentsTable from "./components/Tables/PaymentsTable";

const MAINTENANCE_TABLE_HEADERS=[
{ id: '_id', label: "ID", minWidth: 5 },
{
id: 'period',
label: 'Period',
minWidth:6
},
{
id: 'category',
label: 'Type',
minWidth: 5

},
{
id: 'aptnum',
label: 'Apartment',
minWidth: 1
},
{
id: 'amt',
label: 'Amount',
minWidth: 2
},
{
id: 'dueat',
label: 'Due Date',
minWidth: 5
},
{
  id: 'status',
  label: 'Status',
  minWidth: 5
  },
{
  id: 'reminder',
  label: 'Reminder',
  minWidth: 5
  }
  
]
const PAYMENT_DEFAULT = [
{ _id:"6143bfe92793f4e8186762fd",period:"8-2021",category:"maintenance",aptnum:"A101",amt:1200,status:"due",dueat:"2021-09-29T22:06:30.000Z",reminder:"Send Reminder"},
{ _id:"6143bfe92793f4e8186762fd",period:"8-2021",category:"maintenance",aptnum:"A101",amt:1200,status:"due",dueat:"2021-09-29T22:06:30.000Z" ,reminder:"Send Reminder"}
];

function App() {

return (
<PaymentsTable payments={PAYMENT_DEFAULT} />
)
}

export default App;