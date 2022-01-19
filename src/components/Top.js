import '../css/App.css';
import Image from '../images/headerOne.png';

export default function Top() {
  return (
    <div id="top" className="container">
      <img src={Image} alt="Top" width="70%" height="auto"/>
    </div>
  )
}