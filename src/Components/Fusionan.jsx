import "../CSS/Fusionan.css";

function Fusionan() {
  return (
    <>
      <div className="fusionan">
        <div className="box container">
          <div id="greentext" className="row text-end">
            <h1 className="col-md-3 mt-4 me-5 tech">Tecnología,</h1>
            <div className="greenline col-md-4 mt-4" />
            <h1 className="col-md-3 text-end ms-5 arch">
              arquitectura y diseño
            </h1>
          </div>
          <div className="label">
            <div className="text-wrapper text-start ms-5">se fusionan</div>
            <div className="GreenArrow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fusionan;
