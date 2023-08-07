import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Search from '../../components/Search/Search';

import './index.scss';
import { useParams } from 'react-router-dom';


const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);
  return (
    <div>
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct} />
    </div>
  );
};

export default Products;