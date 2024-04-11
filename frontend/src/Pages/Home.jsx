import React, { useContext } from 'react'
import { ListContext } from '../Context/ListContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const {allListings} = useContext(ListContext)

  return (
    <div>
      {allListings.length ? (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>City</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {allListings.map((row, index) => (
              <tr key={index}>
                <td><Link to={`/listing/${row.id}`}>{row.id}</Link></td>
                <td>{row.title}</td>
                <td>{row.city}</td>
                <td><a href={row.url} target="_blank">Original Listing</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ): null}
    </div>
  )
}

export default Home