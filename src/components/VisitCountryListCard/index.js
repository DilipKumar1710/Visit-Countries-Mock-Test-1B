import './index.css'

const VisitCountryListCard = props => {
  const {countryDetails, visitButton} = props
  const {id, name, isVisited} = countryDetails

  const buttonColor = isVisited ? 'visit-button' : 'active visit-button'

  const text = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    visitButton(id)
  }

  return (
    <li className="visit-country-card">
      <p className="visit-country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">{text}</p>
      ) : (
        <button
          type="button"
          className={buttonColor}
          onClick={onClickVisitButton}
        >
          {text}
        </button>
      )}
    </li>
  )
}

export default VisitCountryListCard
