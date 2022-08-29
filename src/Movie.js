import React, { Component } from 'react'
import { tourData } from './Data'
class Movie extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        Movie: tourData
    }

    render() {
        const tours = this.state.Movie;
        return (
            <div>
                <div className='tour'>
                    {
                        tours.map(tour => {
                            return (
                                <div className='card'>
                                    <img src={tour.img} />
                                    <div className='card_detail'>
                                        <h4>{tour.city}</h4>
                                        <p>{tour.info}</p>
                                        <p className='date'>{tour.date}</p>
                                    </div>
                               </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Movie;