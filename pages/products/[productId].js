import axios from "axios";

export default function Product({ product }){
    return(
        <h1>Details Page: {product.title}</h1>
    );
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`https://fakestoreapi.com/products/${params.productId}`);
    const product = res.data;

    return{
        props: {
            product
        }
    };

}


export async function getStaticPaths() {
    const res = await axios.get('https://fakestoreapi.com/products');
    const products = res.data;

    return {
        paths: products.map(product => {
            return {
                params: {
                    productId: JSON.stringify(product.id)
                }
            }
        }),
        fallback: false
    }

}





















