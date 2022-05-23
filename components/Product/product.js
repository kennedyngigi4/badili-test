import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';

export default function Product(props) {

    return (
        
        <div className={`${styles.border_card} card h-100 shadow-sm`}>
            <div className="card-body">

                <i className={`${styles.favorite} bi bi-suit-heart`}></i>
                <Link href="about">
                    <img src={props.image} className={`${styles.product_image} d-block mx-auto`} height="190px" width="auto" />
                </Link>
                <p className='text-center pt-3'>{props.title.substring(0, 18)}</p>
                <p className='text-center'>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    (85)
                </p>

                <div className='row pb-3'>
                    <div className='col-lg-5 offset-lg-1 col-12'>
                        <span>Price</span><br />
                        <span>Ksh. {props.price}</span>
                    </div>
                    <div className='col-lg-5 col-12'>
                        <button className={`${styles.add_to_cart} btn mt-2`}>Add to cart</button>    
                    </div>
                </div>
            </div>
        </div>
            
    );

}