import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link4 = () => {
  return (
    <div>
      <h2 style={{color:"black"}}>Connect businesses and people more efficiently using Connectify</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>O</th>
            <th>Some Useful Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.facebook.com/"
                target="_blank"
              >
               Create an Account
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.rmc.gov.in/rmcwebsite/birth_death_certificate.aspx"
                target="_blank"
              >
                Display trending hashtags
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.rmc.gov.in/rmcwebsite/tax_new.aspx"
                target="_blank"
              >
               Display trending songs
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link4
