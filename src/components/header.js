import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `mediumseagreen`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul 
        style={{ 
          margin: `1.45em`, 
          lineHeight: `0.6em`,
          fontFamily: `sans-serif`
        }}>
        <li>Food</li>
        <li>Dancing</li>
        <li>Live music</li>
        <li>Workshops and classes</li>
        <li>Art</li>
        <li>Performing arts</li>
        <li>Cultural events</li>
        <li>Gaming</li>
        <li>Outdoors</li>
        <li>Exercise</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
