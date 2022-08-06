import CardComponent from '../Card.js'


export function* IdGen() {
  let i = 0
  while (true) {
    yield i;
    i++
  }
}

export const idGen = IdGen()



const Card = (title, imgSrc, preText, attributes, link, children) => {

  return (
    <CardComponent
      cardInfo={{
        title,
        imgSrc,
        preText,
        attributes,
        ID: () => idGen.next().value,
        link
      }}
    >
      {children}
    </CardComponent>
  )
}


export default Card