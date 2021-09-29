import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productVendors },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productVendors: distinct(field: vendor)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      {productVendors.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/vendor/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
