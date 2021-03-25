import React from "react";
import Header from "../_shared/Header"
import Footer  from "../_shared/Footer"
import CareerLayout  from "./CareerLayout"
import data from "../../assets/locales/data.json"

const CareerPage = () => {
  const props = data.careers.developerAdvocate

  return (
    <>
    <Header title={`${props.title}`} />
    <CareerLayout alternateTitles={props.alternateTitles} />
    <Footer />
    </>
  )
}

export default CareerPage;
