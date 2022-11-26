import React from 'react';

const Cards = () => {
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-12 text-center crd-head">
                    <h2>This is why <span className='main-color spn-sty'>5M people</span>  choose crybot</h2>
                    <p>We believe that we can help our customers achieve their goals by <br /> providing a simple solution to the problems they face in trading.</p>
                </div>
                <div className="col-md-12">
                    <img src="assets/img/shape-2.png" className='img-fluid' alt="shapes" />
                </div>
            </div>
            <div className="row align-items-end justify-content-center crds ">
                {/* <div className="col-md-12 text-center">
                    <div className="row">
                        <div className="col-md-4 text-center crd-1">
                            <img src="assets/img/crd1-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4 mt-md-0'>Super Easy</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                        <div className="col-md-4 text-center crd-2">
                            <img src="assets/img/crd2-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4 mt-md-0'>World class</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                        <div className="col-md-4 text-center crd-3">
                            <img src="assets/img/crd3-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4 mt-md-0'>Effective</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                    </div>

                </div> */}




                {/* <div className="col-md-4 crd-1 text-center">
                    <img src="assets/img/Left-card.svg" className='img-fluid' alt="" />
                </div>
                <div className="col-md-4 crd-1 text-center">
                <img src="assets/img/Center-card.svg" className='img-fluid' alt="" />
                </div>
                <div className="col-md-4 crd-1 text-center">
                <img src="assets/img/Right-card.svg" className='img-fluid' alt="" />
                </div> */}

                 <div className="col-md-1"></div>
                 <div className="col-md-10">
                    <div className="row align-items-end justify-content-center">
                        <div className="col-md-4 crd-1 text-center">
                        <img src="assets/img/Left-card.svg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-4 crd-1 text-center">
                        <img src="assets/img/Center-card.svg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-4 crd-1 text-center">
                        <img src="assets/img/Right-card.svg" className='img-fluid' alt="" />
                        </div>
                    </div>
                 </div>
                 <div className="col-md-1"></div>   




            </div>
            </div>  
        </>
    );
}

export default Cards;
