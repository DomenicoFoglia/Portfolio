import lampOn from '../assets/lamp-on.png'
import lampOff from '../assets/lamp-off.png'

type Props = {
    on: boolean
}

function Lamp({ on }: Props) {
    return (
        <span className={`lamp ${on ? 'is-on' : 'is-off'}`}>
            <img src={lampOff} alt="" className="lamp-img lamp-img-off" aria-hidden="true" />
            <img src={lampOn} alt="" className="lamp-img lamp-img-on" aria-hidden="true" />
        </span>
    )
}

export default Lamp