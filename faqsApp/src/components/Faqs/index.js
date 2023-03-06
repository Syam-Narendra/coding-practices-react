import FaqItem from '../FaqItem/index'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main">
      <h1>FAQs</h1>
      <ul>
        {faqsList.map(each => (
          <FaqItem faqDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
