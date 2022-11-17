import React from 'react';

const Cards = () => {
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-12 text-center crd-head">
                    <h2>This is why <span className='main-color spn-sty'>5M people</span>  choose crybot</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry s .</p>
                </div>
                <div className="col-md-12">
                    <img src="assets/img/shape-2.png" className='img-fluid' alt="shapes" />
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-center">
                    <div className="row">
                        <div className="col-md-4 text-center crd-1">
                            <img src="assets/img/crd1-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4'>Super Easy</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                        <div className="col-md-4 text-center crd-2">
                            <img src="assets/img/crd2-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4'>World class</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                        <div className="col-md-4 text-center crd-3">
                            <img src="assets/img/crd3-icon.png" className='img-fluid' alt="" />
                            <h3 className='mt-4'>Effective</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s .</p>
                        </div>
                    </div>

                </div>
            </div>
            </div>  
        </>
    );
}

export default Cards;