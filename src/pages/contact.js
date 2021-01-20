// import React, { useState } from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// import contact from '../styles/contact.module.scss'

// import Layout from '../components/layout'
// import Head from '../components/head'

// const ContactPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulNieruchomosc(sort: { fields: createdAt, order: ASC }) {
//         edges {
//           node {
//             zdjecia {
//               fluid {
//                 ...GatsbyContentfulFluid
//               }
//               title
//             }
//           }
//         }
//       }
//     }
//   `)

//   let images = data.allContentfulNieruchomosc.edges[0].node.zdjecia
//   const sliderArr = [images[images.length - 1], ...images, images[0]]
//   const [x, setX] = useState(0)
//   const [transition, setTransition] = useState('0.5s')

//   const goLeft = () => {
//     if (x >= 0) return
//     setX(x + 100)
//     setTransition('0.5s')
//   }

//   const goRight = () => {
//     if (x === -100 * (sliderArr.length - 1)) return
//     setX(x - 100)
//     setTransition('0.5s')
//   }

//   // When the transition on the last img ends it moves
//   // to the first image (which is the same image as the last one) without effects
//   // so when the user clicks to go the next picture
//   // it looks like it looped
//   const handleTransition = () => {
//     if (x === 0) {
//       setTransition('none')
//       setX(-100 * (sliderArr.length - 2))
//     }
//     if (x === -100 * (sliderArr.length - 1)) {
//       setTransition('none')
//       setX(-100)
//     }
//   }

//   return (
//     <Layout>
//       <Head title="Kontakt" />
//       <div className={contact.slider}>
//         {sliderArr.map(item => {
//           return (
//             <div
//               className={contact.slide}
//               style={{
//                 transition: `${transition}`,
//                 transform: `translateX(${x}%)`,
//               }}
//               onTransitionEnd={handleTransition}
//             >
//               <Img fluid={item.fluid} alt={item.title} />
//             </div>
//           )
//         })}
//         <button className={contact.goLeft} onClick={goLeft}>
//           {console.log(x)}
//           left
//         </button>
//         <button className={contact.goRight} onClick={goRight}>
//           right
//         </button>
//       </div>
//     </Layout>
//   )
// }

// export default ContactPage
