import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaFire, FaSquare, FaElementor, FaStream } from 'react-icons/fa'

import wyszukiwarkaStyles from '../styles/wyszukiwarka.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

const Wyszukiwarka = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNieruchomosc(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            miasto
            dzielnica
            ulica
            cena
            pokoje
            ogrzewanie
            pitro
            createdAt(formatString: "MM DD YYYY")
            powierzchniaCalkowitaM2
            zdjecia {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
            }
            id
          }
        }
      }
    }
  `)

  const nieruchomosci = data.allContentfulNieruchomosc.edges
  const [nieruchomosciArr, setNieruchomosciArr] = useState(nieruchomosci)
  const [sortOption, setSortOption] = useState('createdAt')
  const [filters, setFilters] = useState([])

  const insertSpaceAfterThirdChar = num => {
    let numStr = num.toString()

    if (numStr.length < 3) {
      return num
    } else if (numStr.length % 3 === 0) {
      return numStr.replace(/\d{3}/g, '$& ')
    } else if (numStr.length % 3 === 1) {
      return numStr.replace(/^\d{1}/g, '$& ').replace(/\d{3}/g, '$& ')
    } else if (numStr.length % 3 === 2) {
      return numStr.replace(/^\d{2}/g, '$& ').replace(/\d{3}/g, '$& ')
    }
  }

  const sortArray = type => {
    setSortOption(type)
    let sorted = []

    if (type === 'createdAt') {
      sorted = [...nieruchomosciArr].sort((a, b) => {
        const c = new Date(a.node[type])
        const d = new Date(b.node[type])
        return c - d
      })
    } else {
      sorted = [...nieruchomosciArr].sort((a, b) => b.node[type] - a.node[type])
    }
    setNieruchomosciArr(sorted)
  }

  const filterArray = e => {
    console.log(filters)

    e.preventDefault()
    let filtered = [...nieruchomosci]

    filters.map(filter => {
      filtered = [...filtered].filter(cur => {
        if (filter.condition(cur.node, filter.val) || filter.val === '') {
          return cur
        }
      })

      return filtered.sort((a, b) => b.node[sortOption] - a.node[sortOption])
    })

    setNieruchomosciArr(filtered)
  }

  const addFilter = (e, condition) => {
    setFilters([
      ...filters.filter(el => el.filterName !== e.target.name),
      { filterName: e.target.name, val: e.target.value, condition: condition },
    ])
  }

  return (
    <Layout>
      <Head title="Wyszukiwarka" />
      <div className={wyszukiwarkaStyles.filterBar}>
        <form onSubmit={e => filterArray(e)}>
          <input
            type="text"
            placeholder="Szukaj po miastach i ulicach"
            name="miasto"
            value={filters['miasto'] && filters['val']}
            onChange={e =>
              addFilter(e, (currNode, filterVal) =>
                currNode['miasto'].toLowerCase().includes(filterVal.toLowerCase())
              )
            }
          />
          <input
            type="number"
            placeholder="Cena od"
            name="cena"
            value={filters.cena && filters.cena}
            onChange={e => addFilter(e, (currNode, filterVal) => filterVal >= currNode['cena'])}
          />
          {/* <input
            type="number"
            placeholder="Cena do"
            name="cena"
            value={filters}
            onChange={e => addFilter(e)}
          /> */}
          <input type="submit" value="Szukaj" />
        </form>
      </div>
      <div className={wyszukiwarkaStyles.body}>
        <div className={wyszukiwarkaStyles.header}>Wyniki wyszukiwania</div>

        <div className={wyszukiwarkaStyles.sortBar}>
          <div>Ilość nieruchmości: {nieruchomosciArr.length}</div>
          <div className={wyszukiwarkaStyles.dropdownListSort}>
            {/* <button className={wyszukiwarkaStyles.sortButton}>
              Sortuj wg{' '}
              <div className={wyszukiwarkaStyles.chevronDownWrapper}>
                <span className={wyszukiwarkaStyles.chevronDown} />
              </div>
            </button> */}
            <select
              onChange={e => sortArray(e.target.value)}
              className={wyszukiwarkaStyles.sortOptions}
            >
              <option value="createdAt">Nowości</option>
              <option value="cena">Najwyższa cena</option>
              <option value="powierzchniaCalkowitaM2">Największy metraż</option>
              {/* <option value={{ sortBy: 'cena', order: 'DESC' }}>Najwyższa cena</option> */}
              {/* <option value="powierzchniaCalkowitaM2">Największy metraż</option> */}
            </select>
          </div>
        </div>

        <div className={wyszukiwarkaStyles.results}>
          {nieruchomosciArr.map(edge => {
            return (
              <div className={wyszukiwarkaStyles.result} key={edge.node.id}>
                <div className={wyszukiwarkaStyles.images}>
                  {edge.node.zdjecia ? (
                    <Link
                      to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}
                    >
                      <Img
                        className={wyszukiwarkaStyles.image}
                        fluid={edge.node.zdjecia[0].fluid}
                      />
                    </Link>
                  ) : (
                    <p>Brak zdjęć</p>
                  )}
                </div>
                <div className={wyszukiwarkaStyles.details}>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    <h4>{`${edge.node.miasto}, ${edge.node.dzielnica}`}</h4>
                  </Link>
                  <h5>{edge.node.ulica} </h5>
                  <ul>
                    <li>
                      <FaSquare />
                      <p>Pow. całkowita</p>
                      {edge.node.powierzchniaCalkowitaM2}
                    </li>
                    <li>
                      <FaFire />
                      <p>Ogrzewanie</p>
                      {edge.node.ogrzewanie}
                    </li>
                    <li>
                      <FaStream />
                      <p>Liczba pokoi</p>
                      {edge.node.pokoje}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                  </ul>
                </div>

                <div className={wyszukiwarkaStyles.priceAndButton}>
                  <div>
                    <h3>
                      {insertSpaceAfterThirdChar(edge.node.cena)} <span>PLN</span>
                    </h3>
                    <p>
                      {Math.round(edge.node.cena / edge.node.powierzchniaCalkowitaM2)}{' '}
                      <span>
                        PLN/m<sup>2</sup>
                      </span>
                    </p>
                  </div>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    <button>Sprawdź</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Wyszukiwarka
