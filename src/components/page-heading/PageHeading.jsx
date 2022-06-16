import React from 'react'
import "./page-heading.scss"

const PageHeading = props => {
  return (
    <div className="page-heading">
    <span className="page-heading__title">
      {props.title}
      <span className="page-heading__page">{props.page_txt1} <span>{props.page_txt2}</span></span>
    </span>
  </div>
  )
}

export default PageHeading