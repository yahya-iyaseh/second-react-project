import '../css/App.css';
import '../css/cards.css';
import Card from './Card.js';
import Data from './Data.js'
export default function Cards() {
 
 const result = Data.map(item => <Card key={item.id} img={item.img} price={item.price} status={item.status} rating={item.rating} quantity={item.quantity} country={item.country} bodyTitle={item.bodyTitle} openSpot={item.openSpot} />)
  return (
    <div className="container">
      <div className="margin-auto">
        <div className="card-grid">
          {
            result
          }
        </div>
      </div>
    </div>
  )
}