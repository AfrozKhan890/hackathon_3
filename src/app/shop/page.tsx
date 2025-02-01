import Breadcrumbs from "@/components/BreadCrumbs";
import ProductDetails from "@/components/ProductDetails";
import ProductTabs from "@/components/ProductTabs";
import ShopImageGallery from "@/components/ShopImageGallery";


export default function Page({ params: { slug } }) {
  const [product, setProduct] = useState(null);

  return (
    <>
      <Breadcrumbs productTitle={product?.title || ''} />
      <ShopImageGallery imageUrl={product?.imageUrl || ''} />
      <ProductDetails product={product} />
      <ProductTabs description={product?.description || ''} />
    </>
  );
}
