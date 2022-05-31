/* eslint-disable jsx-a11y/accessible-emoji */

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
    const renderPagination = () => {
        //let {pageCount,currentPage} = this.state
    
        const paging = []
    
        for (let i= 1;i<=totalPages; i++){
          paging.push(
            <button 
                style={{width:'50px'}}
                className="btn btn-light"
               onClick={() => {
                setActivePage(i)
                //currentPage = i
               }
             }>
                {i}
             </button>
          )
        }
    
        return paging
     }


   
    return (
      <>
        <div className="pagination justify-content-center">
            
          <button style={{width:'100px'}} disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
            Previous
          </button>
          {renderPagination()}
          <button style={{width:'100px'}} disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
            Next
          </button>
            
            
        </div>
        <p>
          Page {activePage} of {totalPages}
        </p>
        
      </>
    )
  }
  