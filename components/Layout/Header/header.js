import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
    return (
        <nav className={`${styles.mainNav} navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Badili</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/"><a className={`${styles.top_menu_links} nav-link active`} aria-current="page">Shop</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className={`${styles.top_menu_links} nav-link`}>Phone Repair</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className={`${styles.top_menu_links} nav-link`}>Workshops</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className={`${styles.top_menu_links} nav-link`}>Blogs</a></Link>
                        </li>
                    </ul>
                </div>
                <div className='justify-content-end pe-3'>
                    <i className="bi bi-basket px-3 fs-4"></i>
                    <i className="bi bi-suit-heart px-3 fs-4"></i>
                    <i className="bi bi-person-circle px-3 fs-4"></i>
                </div>
            </div>
        </nav>
    );
}