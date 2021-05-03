function MakeField({ id, placeholder, setFieldValue }) {
    return (
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label key={id} htmlFor={id}>{placeholder}:</label>
                    <input onChange={setFieldValue} id={id} type="text" className="form-control" placeholder={placeholder} />
                </div>
            </div>
        </div>
    )
}

export default MakeField