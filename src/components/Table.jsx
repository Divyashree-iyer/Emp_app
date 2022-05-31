import { useState, useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { sortRows, filterRows, paginateRows } from './helpers'
import { Pagination } from './Pagination';
import { BsTrash } from 'react-icons/bs';

export const Table = ({ columns, rows, del }) => {
  const [activePage, setActivePage] = useState(1)
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
  const rowsPerPage = 3

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]

        return updatedFilters
      })
    }
  }


  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' });
    setActivePage(1);
    setFilters({});
  }
  const deleteRow = (id) =>  {
        del(id);
  }

  return (
    <div>
        <input
        type="search"
        placeholder={`Search`}
        value={filters['name']}
        onChange={(event) => handleSearch(event.target.value,'name')}
        />
      <table className='table table-responsive'>
        <thead>
          <tr>
              <th>Select</th>
            {columns.map((column) => {

              return (
                <th key={column.accessor}>
                  <span>{column.label}</span>
                </th>
              )
            })}
          </tr>

        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr key={row.id}>
                  <td>
                    <NavLink className='btn btn-light' to={`/employee-master/${row.id}`}  >Edit</NavLink> 
                  </td>
                {columns.map((column) => {
                  if (column.format) {
                    return <td key={column.accessor}>{column.format(row[column.accessor])}</td>
                  }
                  return <td key={column.accessor}>{row[column.accessor]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No data found</p>
      )}

      <div>
        <p>
          <button style={{width:'100px'}} className='btn btn-light' onClick={clearAll}>Clear all</button>
          <NavLink className='btn btn-light' to={`/employee-master`}  >Add</NavLink>
         
          
        </p>
      </div>
    </div>
  )
}
export default Table;