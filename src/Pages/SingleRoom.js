import React, { Component } from 'react'
import Banner from '../Components/Banner'

import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../Components/StyledHero'

export class SingleRoom extends Component {
    constructor(props){
    super(props);
    console.log(this.props)


    this.state={
        slug:this.props.computedMatch.params.slug,
    }

     }

    static contextType = RoomContext;
    // componentDidMount(){

    // }
    render() {
        const {getRoom}=this.context;
        const room= getRoom(this.state.slug);
        console.log(room)
        if(!room){
            return ( <div className="error">
                <h2>No such Room exists...</h2>
                <Link to = './rooms' className="btn-primary"> Check out our rooms </Link>
            </div>
            );

        }

        const {name,description,price,extras,capacity,breakfast,images} = room;

        return (

            <>
            <StyledHero img ={images[0]} >
                <Banner title={`${name} room`}>
                    <Link to = '/rooms' className="btn-primary">Back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((image,index)=>
                    <img key={index} src={image} alt={name}  style={{
                        resizeMode: "stretch",
                        height: 150,
                        
                      }} />
                    )
                    }

                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price $ :{price}</h6>
                            <h6>{capacity>1? `${capacity} people`:`${capacity} person`}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </article>
                    
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((extra,index)=>{
                    return <li key={index}>
                        -{extra}

                    </li>})}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleRoom

