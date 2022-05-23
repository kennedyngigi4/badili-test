export default function Rating(){
    return (
        <>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star"></i>
                    <span className="ps-3">above</span>
                </label>
            </div>
        </>
    );
}