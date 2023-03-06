import Slider from 'react-slick'
import './index.css'

import PlanetItem from '../PlanetItem/index'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  console.log(planetsList)
  return (
    <div data-testid="planets" className="slider">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem data={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
