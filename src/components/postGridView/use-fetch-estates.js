import { graphql, useStaticQuery } from 'gatsby'

export const useFetchEstates = () =>
  useStaticQuery(graphql`
    query {
      allContentfulNieruchomosc(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            miasto
            dzielnica
            ulica
            cena
            powierzchniaCalkowitaM2
            id
            liczbaPokoi
            aktualne
            zdjecia {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
            }
          }
        }
      }
    }
  `)
