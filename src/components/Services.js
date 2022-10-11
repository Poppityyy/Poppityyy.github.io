import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">PRODOTTI</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="QUADRO VVVF VECTOR CON ARD" img="img1.JPG" text="Quadro a microprocessore con variatore di frequenza vector ideale per modernizzazione adatto per tutti gli impianti con porte manuali, semiautomatyiche e automatiche, fino a 22 kW facilemnte configurabile con collegamenti in parallelo , seriale o misti" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="VVVF GEARLESS" img="VVVF GEARLESS.JPG" text="Descrizione" />
                    </div>
                    {/* <div className="col-md-4 mb-2">
                    <Card title="Text" img="card3.png" text="Text" />
                    </div>    */}
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
