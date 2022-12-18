import data from "../data.js"
import GoogleMapReact from 'google-map-react';


export default function Tile(props) {
    // let badgeText
    // if (props.visits === 0) {
    //     badgeText = "WISHLIST"
    // } else if (props.smalldogs === "Yes") {
    //     badgeText = "Small dogs"
    // }
    

    let additionalImg
    if (props.additionalImg instanceof Array) {
        additionalImg = props.additionalImg.map((item) => <img src={item.src} alt={item.alt} className="tiles--additional" />)
    } else if (typeof props.additionalImg != "undefined") {
        additionalImg = <img src={`/${props.additionalImg}`} className="tiles--additional" />
    }   else {
        console.log("fail")
    }
   
    
    
   
    
    return (
        <div className="tile">
            <div className = "tile--left">
                {/* {badgeText && <div className="tile--badge">{badgeText}</div>} */}
           
                <img src={`/${props.img}`} className="tile--image" />
            </div>
            <div className="tile--right">
                <span className="tile--title">{props.title}</span>
                <div className="city">
                    <img src="/pin.png" className="tile--pin"/> 
                    <span className="gray">{props.city}</span>
                </div>
                <div className="ratings">
                    <span className="gray"><img src="/star.png" className="tile--star"/>{props.rating}  / 5 • {props.visits} visits</span>
                </div>
                <div>
                <a href={props.url} className="gray">GOOGLE MAPS</a>
                </div>
                <div className="title--info">
                    <p className="tile--description">{props.description}</p>
                </div>
                <section className="more">
                {additionalImg}
                </section>
            </div>
        </div>
    )
}