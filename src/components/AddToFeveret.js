import React, { Component } from 'react'
import axios from 'axios';

export default class
    extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            genrs: [],
            cGenr: "All Details"
        }
    }
    async componentDidMount() {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8c9dc1863ffa6ebb2dbcbbbbb739f9d1&page=${this.state.page}`, (data) => {
            return data;
        })
        console.log(data.data.results);
        this.setState({ movies: [...data.data.results] })

        const genrs = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=8c9dc1863ffa6ebb2dbcbbbbb739f9d1&language=en-US', (genr) => {
            return genr;
        })
        
        this.setState({ genrs: [...genrs.data.genres] })
    }
    render() {
        function isPresent(arr, string) {
            let count = 0;
            arr.forEach((elm) => {
                if (elm.name == string) {
                    count++;
                    return count
                }
            })
            return count;
        }
        let temp = [];
        this.state.movies.forEach(mobj => {
            this.state.genrs.forEach(genr => {
                if (mobj.genre_ids[0] == genr.id) {
                    
                    let ispresent = isPresent(temp, genr.name)
                    if (ispresent == 0) {
                        temp.push(genr);
                    }
                }
            })
        });
        temp.unshift({name:"All Details"});
        console.log(temp);
        return (
            <div>
                <div class="container-fluid h-100">
                    <div class="row h-100">
                        <div class="col-3">
                            <ul class="list-group">
                                {
                                    temp.map((obj) => (
                                        this.state.cGenr == obj[0] ?
                                            <li class="list-group-item" style={{ backgroundColor: "#212529", color: '#fff' }}>{obj.name}</li> :
                                            <li class="list-group-item">{obj.name}</li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div class="col overflow-auto h-100">
                            <div className='row'>
                                <div className='col'>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" placeholder="Search" aria-label="UseSearchrname" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="input-group flex-nowrap">
                                        <input type="number" class="form-control" placeholder="Select Row" aria-label="Select Row" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div class="table-responsive mt-2">
                                    <table class="table">
                                        <thead class="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Gener</th>
                                                <th scope="col">Popularity</th>
                                                <th scope="col">Rating</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.movies.map((movieobj) => (
                                                   
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>{movieobj.original_title}</td>
                                                        {
                                                           this.state.genrs.map((obj)=>(
                                                            obj.id == movieobj.genre_ids[0]?
                                                            <td>{obj.name}</td>:""
                                                           ))
                                                        }
                                                        <td>{movieobj.popularity}</td>
                                                        <td>{movieobj.vote_average}</td>
                                                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
