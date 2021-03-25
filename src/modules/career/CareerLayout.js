const CareerLayout = ({alternateTitles}) => {

  return (
    <div>
      Career Layout
        {alternateTitles.map((title, index) => {
          return (
            <div key={index}>
              {title}
            </div>
            )})
        }
    </div>
  )
}

export default CareerLayout;
