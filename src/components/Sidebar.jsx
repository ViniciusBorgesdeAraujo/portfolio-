import SocialNetworks from './SocialNetworks'

import Avatar from '../img/vini.png'

import '../styles/components/sidebar.sass'
import InformationContainer from './informationContainer'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Vinicius Borges"/>
        <p className="title">FullStack Júnior</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">
            Download currículo
        </a>
    </aside>
}

export default Sidebar;