import React from 'react'
import { useParams} from "react-router-dom";
const EmployeeMaster = (props) => {
  const { id }= useParams();

  return (
    <div>
      {typeof id == 'undefined' &&
      <h1>Add Employee Page</h1>
      }
      {typeof id !== 'undefined' &&
      <h1>Edit Employee Page</h1>
      }
      <form class="form-inline" >
        <div class="form-group row">
          <label className='col-sm-3 col-form-label' >Employee No.</label>
          <div className='col-sm-8'>
            <input type="text" class="form-control" id="empno" placeholder="Enter Employee No." />
          </div>
        </div>
        <div class="form-group row">
          <label className='col-sm-3 col-form-label' >Employee Name.</label>
          <div className='col-sm-4'>
            <input type="text" class="form-control" id="fn" placeholder="Enter First Name" />
          </div>
          <div className='col-sm-4'>
            <input type="text" class="form-control" id="ln" placeholder="Enter Last Name" />
          </div>
        </div>
        <div class="form-group row">
          <label className='col-sm-3 col-form-label' >Designation</label>
          <div className='col-sm-8'>
            <input type="text" class="form-control" id="desig" placeholder="Enter Designation" />
          </div>
        </div>
        <div class="form-group row">
          <label className='col-sm-3 col-form-label' >Date of Joining</label>
          <div className='col-sm-8'>
            <input type="date" class="form-control" id="doj"/>
          </div>
        </div>
        <div class="form-group row">
          <label className='col-sm-3 col-form-label' >Salary</label>
          <div className='col-sm-8'>
            <input type="text" class="form-control" id="empno" placeholder="Enter Salary" />
          </div>
        </div>

        <button type='submit' className='btn btn-light' >Save</button>
        <button type='button' className='btn btn-dark' >Cancel</button>
      </form>
    </div>
  )
}

export default EmployeeMaster