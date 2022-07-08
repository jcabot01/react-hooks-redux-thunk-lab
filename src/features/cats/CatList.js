import React from "react"


function CatList({ catPics = []}) {

  return (
    <div>
      {catPics.map((pic) => (
        <img key={pic.id} alt="cat" src={pic.url} />
      ))}
    </div>
  )
}

export default CatList