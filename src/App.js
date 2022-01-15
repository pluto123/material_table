import MaterialTable from 'material-table';
import React, { forwardRef, useState } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App() {
  const [tableData, setTableData] = useState([
    { name: "Steven", email: "steven@gmail.com", phone: "0920765432", age: null, gender: "M", city: "Taipei", fee: 46352 },
    { name: "Eric", email: "eric@gmail.com", phone: "0921123456", age: 14, gender: "M", city: "Taiwan", fee: 47625 },
    { name: "Oscar", email: "oscar@gmail.com", phone: "0922567893", age: 11, gender: "M", city: "Japan", fee: 48712 },
    { name: "Amy", email: "amy@gmail.com", phone: "0931679356", age: 45, gender: "F", city: "USA", fee: 46793 }
  ])

  const genderLookup = { 
    M: "Male", 
    F: "Female"
  }

  const columns = [
    { title: "Name", field: "name", sorting: true, customSort: (a, b) => a.name.length - b.name.length, filtering: false },
    { title: "Email", field: "email", filterPlaceholder: "Filter by email" },
    { title: "Phone Number", field: "phone"/*, align: 'right' */}, // align: [right | center | left]
    { title: "Age", field: "age", emptyValue: ()=><em>null</em>, searchable: false/*. defaultSort: "asc"*/},
    { title: "Gender", field: "gender", lookup: genderLookup },
    { title: "City", field: "city" },
    { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "TWD", minimumFractionDigits: 1 } }
  ]

  return (
    <div className="App">
      <MaterialTable 
        icons={tableIcons}
        columns={columns}
        data={tableData}
        title="Student Information"
        options={{
          sorting: true, 
          search: true,
          //searchText: "steven",
          //searchFieldAlignment: "left",
          //searchAutoFocus: true,
          //searchFieldVariant: "outlined", // searchFieldVariant: [standard | filled | outlined]
          filtering: true,
          paging: true,
          pageSizeOptions: [5, 10, 20, 25, 50, 100],
          pageSize: 2,
          paginationType: "stepped", //paginationType: [normal | stepped]
          showFirstLastPageButtons: false
        }}
      />
    </div>
  );
}

export default App;
