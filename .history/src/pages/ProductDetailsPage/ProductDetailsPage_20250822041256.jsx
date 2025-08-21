import { useParams } from 'react-router-dom';
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';
import { useProducts } from '../../context/useProducts';
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find(p => p._id === id || p.id === id);
  if (!product) {
    return (
      <div
        style={{
          padding: '0 120px',
          backgroundColor: '#f5f5f5',
          height: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Sản phẩm không tồn tại</h2>
      </div>
    );
  }
  return (
    <div
      style={{
        padding: '0 120px',
        backgroundColor: '#f5f5f5',
        height: '1000px',
      }}
    >
      <h5>
        Trang chủ / {product.category} / {product.name}
      </h5>
      <ProductDetailComponent product={product} />
    </div>
  );
};
export default ProductDetailsPage;
