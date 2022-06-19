
import React, { Component } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Movies } from "./Movies";
import './banner.css';
export class Banner extends Component {
    render() {
        let maxNumber = 10;
        let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        let singleElm = Movies.find(elm =>
            elm.id === randomNumber
        )
        let otherMovieimg = Movies.filter(movies=>movies.id > 10 && movies.id <= 20);
        console.log(otherMovieimg);
        return (
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className='bigImg'>
                                <div className='bigImgoverlay'>
                                    <h3>{singleElm.title}</h3>
                                </div>
                                <img src={singleElm.posterUrl} alt="dgfjdsgfjsdg" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='col-md-12'>
                                <div className='mSmlImg'>
                                <div className='mSmlImgoverlay'>
                                <h5>{otherMovieimg[1].title}</h5>
                                </div>
                                <img src={otherMovieimg[1].posterUrl} alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mSmlImg'>
                                <div className='mSmlImgoverlay'>
                                <h5>{otherMovieimg[0].title}</h5>
                                </div>
                                    <img src={otherMovieimg[0].posterUrl}  alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='row'>
                            <div className="col-md-6">
                            <div className='mSmlImg'>
                            <div className='mSmlImgoverlay'>
                            <h5>{otherMovieimg[2].title}</h5>
                            </div>
                                    <img src={otherMovieimg[2].posterUrl}  alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className='mSmlImg'>
                            <div className='mSmlImgoverlay'>
                            <h5>{otherMovieimg[3].title}</h5>
                            </div>
                                    <img src={otherMovieimg[3].posterUrl}  alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className='mSmlImg'>
                            <div className='mSmlImgoverlay'>
                            <h5>{otherMovieimg[4].title}</h5>
                            </div>
                                    <img src={otherMovieimg[4].posterUrl}  alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className='mSmlImg'>
                            <div className='mSmlImgoverlay'>
                            <h5>{otherMovieimg[5].title}</h5>
                            <p></p>
                            </div>
                                    <img src={otherMovieimg[5].posterUrl}  alt="dgfjdsgfjsdg" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Banner