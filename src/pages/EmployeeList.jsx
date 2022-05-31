import React from 'react'
import Table from '../components/Table'
import { rows, columns } from '../data'
//import FilterTableComponent from '../components/FilterTable'
const EmployeeList = () => {
  const [rowss, setRows] = React.useState(rows);
  function delRow(id){
		setRows(prevItems => {
		  return prevItems.filter((item, index) => {
			return index !== id;
		  });
		});
  }
  return (
    <div>
      <Table rows={rowss} columns={columns} del={delRow} />
    </div>
  )
}

export default EmployeeList