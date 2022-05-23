import styles from './modal.module.css';

export default function Modal(){
    return (
        <>
            <div>
                <i className={`${styles.close} bi bi-x-circle`}></i>
                <img src="/images/pro1.jpg" className='d-block mx-auto' width="50%" />
            </div>
            <div>
                <div className="row my-3">
                    <div className='col-lg-3 col-12'>
                        <img src="/images/pro1.jpg" className='d-block mx-auto' width="50%" />
                    </div>
                    <div className='col-lg-3 col-12'>
                        <img src="/images/pro1.jpg" className='d-block mx-auto' width="50%" />
                    </div>
                    <div className='col-lg-3 col-12'>
                        <img src="/images/pro1.jpg" className='d-block mx-auto' width="50%" />
                    </div>
                    <div className='col-lg-3 col-12'>
                        <img src="/images/pro1.jpg" className='d-block mx-auto' width="50%" />
                    </div>
                </div>
            </div>

            <div className='ps-3'>
                <h4>Monstera Deliciosa <br/>
                    Variegata(Large)
                </h4>

                <p className='pt-3'>Some content will be coming here. Some content will be coming here. Some content will be coming here.</p>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Details</a>
                    </li>
                    <li className="nav-item ps-5">
                        <a className="nav-link" href="#">Reviews(32)</a>
                    </li>
                </ul>

            </div>

            <div className='row mt-4'>
                <div className='col-4 mt-2'>
                    <i className={`${styles.favorite} bi bi-suit-heart-fill text-danger text-center`}></i>
                </div>
                <div className='col-8'>
                    <div className='d-grid mt-3'>
                        <button className={`${styles.set_price_btn} btn btn-success`}>Ksh 375 . Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}