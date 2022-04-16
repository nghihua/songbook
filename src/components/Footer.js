import React from "react";

export default function Footer() {
    return (
        <footer style={{background: "rgba(240, 240, 240, 0.8)"}} className="page-footer font-small blue pt-4">
            <div className="py-2 container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">About SongBook</h5>
                        <p>Personal project to store songs that I appreciate.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Reach Me</h5>
                        <div className="d-flex justify-content-center">

                            <a href="https://github.com/nghihua" className="link mx-2" target="_blank">
                                <i class="fab fa-github fa-2x margin"></i>
                            </a>
                            <a href="https://www.facebook.com/huanhat.gianghi/" className="link mx-2" target="_blank">
                                <i class="fab fa-facebook fa-2x margin"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-4">© 2020 Copyright
            </div>

        </footer>
    )
}