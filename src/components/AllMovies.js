import React, { Component } from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import axios from 'axios';
export default class AllMovies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [1],
            page: 1,
            movies: []
        }
    }
    async componentDidMount() {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8c9dc1863ffa6ebb2dbcbbbbb739f9d1&page=${this.state.page}`, (data) => {
            return data;
        })
        console.log(data);
        this.setState({ movies: [...data.data.results] })
        
    }
    changePage = async () => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8c9dc1863ffa6ebb2dbcbbbbb739f9d1&page=${this.state.page}`, (data) => {
            return data;

        })
        this.setState({ movies: [...data.data.results] })
    }

    rightArrow = () => {
        let temparr = [];
        for (let index = 1; index <= this.state.parr.length + 1; index++) {
            temparr.push(index);
        }
        this.setState({ parr: [...temparr], page: this.state.page+1 }, this.changePage)
        
    }

    leftArrow = () => {
        
        if (this.state.page != 1) {
            this.state.parr.pop(this.state.parr.length-1)
            this.setState({ page: this.state.page-1 }, this.changePage);
        }
    }


    render() {
        return (
            <div>
                <h3 className='text-center p-2'>Trending Movies</h3>
                <div className='container-fluid'>
                    <div className='row'>
                        {
                            this.state.movies.map((singleMovie) => (
                                <div className='col-md-2' onMouseOut={() => this.setState({ hover: '' })}>
                                    <div className='mimage mt-1 mb-1' onMouseEnter={() => this.setState({ hover: singleMovie.id })} >
                                        <div className='movieimgoverlay'></div>
                                        <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`}></img>
                                        <div className='movietitle'>
                                            <h5>{singleMovie.original_title}</h5>
                                        </div>
                                        <div className='buttnwrpr moreinfo'>
                                            {
                                                this.state.hover == singleMovie.id &&
                                                <button type="button" className="btn btn-info">More Info</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <nav aria-label="Page navigation example" className='mt-2 mb-2' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" aria-label="Previous" onClick={this.leftArrow}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {
                                    this.state.parr.map((value, idx) => (
                                        <li className="page-item"><a className="page-link" href="#">{value}</a></li>
                                    ))
                                }
                                <li className="page-item">
                                    <a className="page-link" aria-label="Next" onClick={this.rightArrow}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
