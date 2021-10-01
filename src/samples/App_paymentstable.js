import PaymentsTable from "./components/Tables/PaymentsTable";

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