function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/logo.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">CHI SIAMO</h2>
            <p className="main-p">
            Una ditta di ascensori! No, non è un’ironia. Siamo una ditta di ascensori. 
            Ecco perché noi siamo MAR Ascensori. 
            Abbiamo un’esperienza di oltre 30 anni nel settore, 
            e ci occupiamo di progettazione, installazione, manutenzione e revisione di ascensori, 
            scale mobili, montacarichi e piattaforme elevatorie. 
            Siamo presenti in Italia, con una sede a Roma, 
            e ci occupiamo di tutto quello che riguarda l’accessibilità e la mobilità verticale. 
            Il nostro obiettivo è quello di offrire ai nostri clienti un servizio di qualità, 
            con una rapida risposta alle esigenze, 
            e con un’attenzione particolare per la sicurezza e la sostenibilità. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
