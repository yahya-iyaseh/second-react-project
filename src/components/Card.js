import '../css/cards.css';
export default function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.img} alt="imgOne" />
        {props.openSpot <= 0 && <span className="image-title">{props.status}</span>  } 
      </div>
      <div className="card-body">
        <div className="info">
          <span className="star">&#9733;</span>
          <span className="review">{props.rating}</span>
          <span className="quantity">({props.quantity})</span>
          <span className="country">  {props.country}</span>
        </div>
        <div className="body-title">
          {props.bodyTitle}
        </div>
        <div className="price">
          <strong>From ${props.price}</strong> / Person
        </div>
      </div>
    </div>
  )
}