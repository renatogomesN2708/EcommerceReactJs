import './index.scss';
import { Link } from 'react-router-dom';

const ProductsCard = ({data}) => {
  return (
    <div className='home__card'>
      <section><img src={data.imgPath} alt="model1" /></section>
      < div className='home__card-description'>
        <p>{data.title}</p>
        <div className='home__card-button'>
        <Link to={`/products/${data.id}`}><button>
            Comprar
            Look
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;