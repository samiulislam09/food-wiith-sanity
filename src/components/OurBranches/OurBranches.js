import React, { useEffect, useState } from 'react'
import sanityClient from '../../client'
import './ourBranches.css'

function OurBranches() {
  const [branches, setBranches] = useState(null)
  useEffect(() => {
    sanityClient.fetch(
        `*[_type == 'post']{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`
    )
    .then(data => setBranches(data))
    .catch(err => console.error(err))
  }, [])
  return (
    <div className='container'>
      <div className='branches-title'>
        <h2>Our Branches</h2>
        <h3>Find out our branches all over Bangladesh</h3>
      </div>
      <div className='our-branches'>
        {branches && branches.map((branch, index)=>(
          <div className='branch-detail'>
            <div className='branch-image'>
              <img src={branch.mainImage.asset.url} alt='img'></img>
              <h2>{branch.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurBranches