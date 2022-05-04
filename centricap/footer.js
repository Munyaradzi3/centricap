import Menu from './menu.js'
import Home_foot from './home_foot.js'
import Blank from './blank.js'

function Footer({foot, screenchange}){
    if(foot=='home'){
        return <Home_foot screench={screenchanger}/>
    }
    if(foot=='blank'){
        return <Blank screench={screenchanger}/>
    }
    else{
        return <Menu screench={screenchanger}/>
    }

    function screenchanger(text){
        screenchange(text)
    }
}

export default Footer