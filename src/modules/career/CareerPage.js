import React from "react";
import Header from "../_shared/Header"
import Footer  from "../_shared/Footer"
import data from "../../assets/locales/data.json"

const CareerPage = () => {
  return (
    <>
    <Header name={`$data.careers.title}`} />

    <Footer />
    </>
  )
}

export default CareerPage;
