import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import { getAllProducts } from '../lib/products';
import axios from 'axios';
import styles from '../styles/Home.module.css'
import Product from '../components/Product/product';
import Modal from '../components/Ui/Modal/modal';
import Rating from '../components/Ui/Rating/rating';

export default function Home({ allProductsData }) {

  const [ search, setSearch] = useState('');

  return (
    <>
      <Head>
        <title>Badili Africa</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </Head>
    
      <section>
        <div className='container-fluid'>
          <div className='row g-0 py-3'>
            <div className={`${styles.left_sidebar} col-lg-2 col-12`}>
              <h6>Filters</h6>
              <hr />
              <h6>Categories</h6>
              <form>
                <div className='form-check pt-2'>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Gardening</label>
                </div>
                <div className='form-check pt-2'>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Plants</label>
                </div>
                <div className='form-check pt-2'>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Seeds</label>
                </div>
                <div className='form-check pt-2'>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Bulbs</label>
                </div>
                <div className='form-check pt-2'>
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Planters</label>
                </div>
              </form>

              <hr />

              <h6>Price range</h6>
              <div className='row pb-3 me-1'>
                <div className='col-lg-6 col-12'>
                  <input type="text" className={`${styles.price_range} form-control`} placeholder='Min'/>
                </div>
                <div className='col-lg-6 col-12'>
                  <input type="text" className={`${styles.price_range} form-control`} placeholder='Max'/>
                </div>
                <div className='d-grid mt-3'>
                  <button className={`${styles.set_price_btn} btn btn-success mx-5`}>Set price</button>
                </div>
              </div>


              <hr />

              <section>
                <h6>Rating</h6>
                <Rating />
              </section>

            </div>
            <div className='col-lg-7 col-12'>
              <div className='mx-5'>
                <form className="d-flex" role="search">
                  <input className={`${styles.search} form-control `} type="search" onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                </form>
                <p className='py-3'>Search for: {search}</p>

                <div className='filter_btn_wrapper'>
                  Sort

                  <span className='ms-5'>
                    <button className={`${styles.filter_btn} btn filter_btn`}>Relevance</button>
                    <button className={`${styles.filter_btn} btn filter_btn`}>Popular</button>
                    <button className={`${styles.filter_btn} btn filter_btn`}>Most New</button>
                    <span className='dropdown'>
                      <button className={`${styles.filter_btn} btn filter_btn dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Price</button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span>
                  </span>
                </div>

                <div className='row mt-3'>
                  {allProductsData.map((product) => {
                    return <div className='col-lg-6 mb-4'><Product title={product.title} price={product.price} image={product.image} /></div>;
                  })}
                </div>



              </div>
            </div>
            <div className={`${styles.right_sidebar} col-lg-3 col-12`}>
              <div className='px-3'>
                <Modal />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
    </>
  );
}



export async function getStaticProps(){
  const res = await axios.get('https://fakestoreapi.com/products');
  const allProductsData = res.data.slice(0,4);
  

  return {
    props: {
      allProductsData
    },
  }
}
