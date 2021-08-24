
import MaintenanceTable from "./components/Tables/MaintenanceTable";

const MAINTENANCE_TABLE_HEADERS=[
{ id: 'ID', label: "ID", minWidth: 5 },
{
  id: 'Date',
  label: 'Date',
  Width: 10
},
{
  id: 'Type',
  label: 'Type',
  minWidth: 5 

},
{
  id: 'Description',
  label: 'Description',
  minWidth: 10
},
{
  id: 'Status',
  label: 'Status',
  minWidth: 5
},
{
  id: 'Details',
  label: 'Status',
  minWidth: 5
}]
const MAINTENANCE_DEFAULT = [
  { id: 'R-98980' , date: '23/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Open' ,details : ' View' },
{ id: 'R-98978' , date: '22/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98976' , date: '21/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98974' , date: '20/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98972' , date: '19/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98970' , date: '18/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98968' , date: '17/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98966' , date: '16/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98964' , date: '15/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98962' , date: '14/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98960' , date: '13/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98958' , date: '12/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98956' , date: '11/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98954' , date: '10/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98952' , date: '09/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98950' , date: '08/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98948' , date: '07/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98946' , date: '06/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98944' , date: '05/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98942' , date: '04/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98940' , date: '03/08/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98938' , date: '02/08/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98936' , date: '01/08/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98934' , date: '31/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98932' , date: '30/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98930' , date: '29/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98928' , date: '28/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98926' , date: '27/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98924' , date: '26/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98922' , date: '25/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98920' , date: '24/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98918' , date: '23/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98916' , date: '22/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98914' , date: '21/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98912' , date: '20/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98910' , date: '19/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98908' , date: '18/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98906' , date: '17/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98904' , date: '16/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98902' , date: '15/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98900' , date: '14/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98898' , date: '13/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98896' , date: '12/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98894' , date: '11/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98892' , date: '10/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98890' , date: '09/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98888' , date: '08/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98886' , date: '07/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98884' , date: '06/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98882' , date: '05/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98880' , date: '04/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98878' , date: '03/07/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98876' , date: '02/07/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98874' , date: '01/07/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98872' , date: '30/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98870' , date: '29/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98868' , date: '28/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98866' , date: '27/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98864' , date: '26/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98862' , date: '25/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98860' , date: '24/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98858' , date: '23/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98856' , date: '22/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98854' , date: '21/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98852' , date: '20/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98850' , date: '19/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98848' , date: '18/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98846' , date: '17/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98844' , date: '16/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98842' , date: '15/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98840' , date: '14/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98838' , date: '13/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98836' , date: '12/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98834' , date: '11/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98832' , date: '10/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98830' , date: '09/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98828' , date: '08/06/2021' , type: 'Electrician' ,  description: 'Electrician- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98826' , date: '07/06/2021' , type: 'Gas Repair' ,  description: 'Gas Repair- Description' ,  status: 'Closed' ,details : ' View' },
{ id: 'R-98824' , date: '06/06/2021' , type: 'Plumbing' ,  description: 'Plumbing- Description' ,  status: 'Closed' ,details : ' View' }

  
];

function App() {
  
  return (
<MaintenanceTable headers={MAINTENANCE_TABLE_HEADERS} requestList={MAINTENANCE_DEFAULT} />
  )
}

export default App;
