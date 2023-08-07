import './index.scss';
import { Link } from 'react-router-dom';

const ProductsCard = ({data}) => {
  return (
    <div className='home__card'>
      <section><img src={data.imgPath} alt="model1" /></section>
      < div className='home__card-description'>
        <p>{data.title}</p>
        <button>
          <Link to={`/products/${data.id}`}>Comprar
          Look</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;