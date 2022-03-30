import React from "react";
import Img from "gatsby-image";
import { FaMobileAlt, FaRegEnvelope, FaRegUser } from "react-icons/fa";

import styles from './styles.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

export const ContactAgentBlock = ({ nieruchomosc }) => {
  const {
    zdjecieAgenta,
    imieINazwiskoAgenta,
    numerTelefonuAgenta,
    emailAgenta
  } = nieruchomosc

  const defaultImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)

  const renderImage = () => {
    if (zdjecieAgenta) {
      return (
        <Img
          className={styles.img}
          fluid={zdjecieAgenta.fluid}
          alt={zdjecieAgenta.title}
        />
      )
    }

    return (
      <Img
        className={styles.img}
        fluid={defaultImage.file.childImageSharp.fluid}
        alt={defaultImage.file.name}
      />
    )
  }

  return (
    <div className={styles.contentContactAgent}>
      <div className={styles.agentHeader}>{imieINazwiskoAgenta ? "Skontaktuj się z agentem" : "Skontakuj się z firmą"}</div>
      <div className={styles.agentPhoto}>
        {renderImage()}
      </div>
      <ul className={styles.agentDetails}>
        <li>
          <div className={styles.agentDetailIcon}>
            <FaRegUser />
          </div>
          {imieINazwiskoAgenta ? imieINazwiskoAgenta : "Mieszkanie Po Krakowsku"}
        </li>

        <li>
          <div className={styles.agentDetailIcon}>
            <FaMobileAlt />
          </div>
          {numerTelefonuAgenta ? numerTelefonuAgenta : "736 848 567"}
        </li>

        <li>
          <div className={styles.agentDetailIcon}>
            <FaRegEnvelope />
          </div>
          {emailAgenta ? emailAgenta : "mieszkaniepokrakowsku@gmail.com"}
        </li>
      </ul>
    </div>
  )
}
