import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { HiFilter } from 'react-icons/hi'
import { graphql, useStaticQuery } from 'gatsby'

import wyszukiwarkaStyles from '../styles/wyszukiwarka.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import PostBlockView from '../components/postBlockView/postBlockView'

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
            liczbaPokoi
            ogrzewanie
            pietro
            krotkiOpis
            createdAt(formatString: "YYYY-MM-DDTHH:mm:ss")
            powierzchniaCalkowitaM2
            aktualne
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
  let filterDropdownAnimation = `${wyszukiwarkaStyles.filterDropdown} ${wyszukiwarkaStyles.pdngHz}`
  const [show, setShow] = useState(false)
  const [nieruchomosciArr, setNieruchomosciArr] = useState(nieruchomosci)
  const [sortOption, setSortOption] = useState('createdAt')
  const [filters, setFilters] = useState([])

  // Sort
  const sortArray = type => {
    setSortOption(type.slice(0, -1))
    let sorted = []

    if (type.slice(0, -1) === 'createdAt') {
      sorted = [...nieruchomosciArr].sort((a, b) => {
        const c = new Date(a.node[type.slice(0, -1)].toString())
        const d = new Date(b.node[type.slice(0, -1)])
        return c - d
      })
    } else if (type.slice(-1) === 'D') {
      sorted = [...nieruchomosciArr].sort(
        (a, b) => b.node[type.slice(0, -1)] - a.node[type.slice(0, -1)]
      )
    } else if (type.slice(-1) === 'A') {
      sorted = [...nieruchomosciArr].sort(
        (a, b) => a.node[type.slice(0, -1)] - b.node[type.slice(0, -1)]
      )
    }
    setNieruchomosciArr(sorted)
  }
  // Filter on submit
  const filterArray = e => {
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

    setShow(false)
    setNieruchomosciArr(filtered)
  }
  // Add filter when typing
  const addFilter = (e, condition) => {
    setFilters([
      ...filters.filter(el => el.filterName !== e.target.name),
      { filterName: e.target.name, val: e.target.value, condition: condition },
    ])
  }

  const showDropdown = () => {
    setShow(!show)
  }

  if (show) {
    filterDropdownAnimation = `${wyszukiwarkaStyles.filterDropdown} ${wyszukiwarkaStyles.pdngHz} ${wyszukiwarkaStyles.open}`
  }

  return (
    <Layout>
      <Head title="Wyszukiwarka" />

      {/* Filter */}
      <div className={wyszukiwarkaStyles.filterBar}>
        <form onSubmit={filterArray}>
          <div className={wyszukiwarkaStyles.filterVisible}>
            <input
              type="text"
              placeholder="Szukaj po miastach i ulicach"
              name="miasto"
              onChange={e =>
                addFilter(e, (currNode, filterVal) =>
                  currNode['miasto'].toLowerCase().includes(filterVal.toLowerCase())
                )
              }
            />
            <input
              type="number"
              placeholder="Cena od"
              name="cena od"
              onChange={e => addFilter(e, (currNode, filterVal) => filterVal <= currNode['cena'])}
            />
            <input
              type="number"
              placeholder="Cena do"
              name="cena do"
              onChange={e => addFilter(e, (currNode, filterVal) => filterVal >= currNode['cena'])}
            />
            <input
              type="number"
              placeholder="m2 od"
              name="m2 od"
              onChange={e =>
                addFilter(
                  e,
                  (currNode, filterVal) => filterVal <= currNode['powierzchniaCalkowitaM2']
                )
              }
            />
            <input
              type="number"
              placeholder="m2 do"
              name="m2 do"
              onChange={e =>
                addFilter(
                  e,
                  (currNode, filterVal) => filterVal >= currNode['powierzchniaCalkowitaM2']
                )
              }
            />
            <div className={wyszukiwarkaStyles.showMoreFilters} onClick={showDropdown}>
              <HiFilter />
            </div>
            <button type="submit">
              <RiSearch2Line />
            </button>
          </div>
        </form>
      </div>
      <form className={filterDropdownAnimation} onSubmit={filterArray}>
        <div className={wyszukiwarkaStyles.inner}>
          <input
            type="text"
            placeholder="Szukaj po miastach i ulicach"
            name="miasto"
            onChange={e =>
              addFilter(e, (currNode, filterVal) =>
                currNode['miasto'].toLowerCase().includes(filterVal.toLowerCase())
              )
            }
          />
          <input
            type="number"
            placeholder="Liczba pokoi od"
            name="pokoje od"
            onChange={e =>
              addFilter(e, (currNode, filterVal) => filterVal <= currNode['liczbaPokoi'])
            }
          />
          <input
            type="number"
            placeholder="Liczba pokoi do"
            name="pokoje do"
            onChange={e =>
              addFilter(e, (currNode, filterVal) => filterVal >= currNode['liczbaPokoi'])
            }
          />
          <input
            type="number"
            placeholder="Cena od"
            name="cena od"
            onChange={e => addFilter(e, (currNode, filterVal) => filterVal <= currNode['cena'])}
          />
          <input
            type="number"
            placeholder="Cena do"
            name="cena do"
            onChange={e => addFilter(e, (currNode, filterVal) => filterVal >= currNode['cena'])}
          />
          <input
            type="number"
            placeholder="m2 od"
            name="m2 od"
            onChange={e =>
              addFilter(
                e,
                (currNode, filterVal) => filterVal <= currNode['powierzchniaCalkowitaM2']
              )
            }
          />
          <input
            type="number"
            placeholder="m2 do"
            name="m2 do"
            onChange={e =>
              addFilter(
                e,
                (currNode, filterVal) => filterVal >= currNode['powierzchniaCalkowitaM2']
              )
            }
          />
          <input style={{ display: 'none' }} type="submit"></input>
        </div>
      </form>

      <div className={`${wyszukiwarkaStyles.body} ${wyszukiwarkaStyles.pdngHz}`}>
        <div className={wyszukiwarkaStyles.header}>Wyniki wyszukiwania</div>
        {/* Sort */}
        <div className={wyszukiwarkaStyles.sortBar}>
          <div>Ilość nieruchmości: {nieruchomosciArr.length}</div>
          <div className={wyszukiwarkaStyles.dropdownListSort}>
            <select
              onChange={e => sortArray(e.target.value)}
              className={wyszukiwarkaStyles.sortOptions}
            >
              <option value="createdAtD">Nowości</option>
              <option value="cenaD">Najwyższa cena</option>
              <option value="cenaA">Najniższa cena</option>
              <option value="powierzchniaCalkowitaM2D">Największy metraż</option>
              <option value="powierzchniaCalkowitaM2A">Najniższy metraż</option>
            </select>
          </div>
        </div>
        {/* Results */}
        <div className={wyszukiwarkaStyles.results}>
          {nieruchomosciArr.map(edge => {
            return <PostBlockView nieruchomosc={edge.node} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Wyszukiwarka
