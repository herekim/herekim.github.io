import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>

      <footer>
        <p className="footer-built">
          © alwayshere Built with
          <span style={{ marginLeft: "4px" }}>
            <a
              style={{ color: "#808080" }}
              href="https://www.gatsbyjs.com"
              target="_blank"
            >
              Gatsby
            </a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
