import Home from './home.js'
import Login from './login.js'
import Register from './register.js'
import Main from './main.js'
import Port from './port.js'
import Noti from './Noti.js'
import Wallet from './wallet.js'
import Deposit from './deposit.js'
import Withdraw from './withdraw.js'
import Project from './project.js'
import Invest from './invest.js'

import {useState} from 'react'

function Screen({screen, screenchange, userkey,setkey}){
    const [select,setSel]=useState('')
    const [list,setList]=useState([])

    function key(text){
        setkey(text)
    }
    function lister(list){
        setList(list)
    }
    function selected(id){
        setSel(id)
    }

    if(screen=='home'){
        return <Home screench={screenchanger}/>
    }
    if(screen=='login'){
        return <Login screench={screenchanger} keyset={key}/>
    }
    if(screen=='register'){
        return <Register screench={screenchanger} keyset={key}/>
    }
    if(screen=='main'){
        return <Main screench={screenchanger} user={userkey} list={list} lister={lister} selected={selected}/>
    }
    if(screen=='port'){
        return <Port screench={screenchanger} user={userkey} list={list} lister={lister} selected={selected}/>
    }
    if(screen=='noti'){
        return <Noti screench={screenchanger} user={userkey}/>
    }
    if(screen=='wallet'){
        return <Wallet screench={screenchanger} user={userkey}/>
    }
    if(screen=='deposit'){
        return <Deposit screench={screenchanger} user={userkey}/>
    }
    if(screen=='withdraw'){
        return <Withdraw screench={screenchanger} user={userkey}/>
    }
    if(screen=='project'){
        return <Project screench={screenchanger} user={userkey} selected={select}/>
    }
    if(screen=='invest'){
        return <Invest screench={screenchanger} user={userkey} selected={select}/>
    }

    function screenchanger(text){
        screenchange(text)
    }
}

export default Screen