import React from 'react'

const Footer = () => {
  return (
    <div className = "main-footer">
      <div className = "container">
        <div className = "row">
          {/* Column1 */}
          <div className = "col">
              <h4>column1</h4>
              <ul className = "list-unstyled">
                <li></li>
              </ul>
          </div>
          {/*Column2 */}
          <div className = "column">
              <h4>column2</h4>
              <ul className = "list-unstyled">
                <li></li>
              </ul>

          </div>
          {/*Column3*/}
          <div className = "column">
              <h4>column3</h4>
              <ul className = "list-unstyled">
                <li></li>
              </ul>

          </div>

        </div>
        <hr />
        <div className = "row">
          <p className = "col-sm">
            &copy;{new Date().getFullYear()} Wayne State University AWS Cloud Club | All rights reserved
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
