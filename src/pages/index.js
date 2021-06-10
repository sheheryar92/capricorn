import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className='grid grid-flow-row auto-rows-max'>
      <Head>
        <title>Capricornstylepk</title>
      </Head>
      <Header />
      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
<main className='max-w-screen-2xl mx-auto bg-gray-100'>
  <Banner />
  <ProductFeed products={products} />
</main>
      {/* ---- ---- */}
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    res => res.json()
  );

return {
  props: {
    products,
  }
}



}