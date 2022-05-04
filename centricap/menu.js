import {FaHouseUser, FaBell,FaBriefcase,FaWallet} from 'react-icons/fa'
import {useState} from 'react'

function Menu({screench}){
	const [main,setMain]=useState(styles.menu1)
	const [port,setPort]=useState(styles.menu)
	const [noti,setNoti]=useState(styles.menu)
	const [wallet,setWallet]=useState(styles.menu)
	function screen(text){
		if(text=="main"){
			setMain(styles.menu1)
			setPort(styles.menu)
			setNoti(styles.menu)
			setWallet(styles.menu)
		}
		if(text=="port"){
			setMain(styles.menu)
			setPort(styles.menu1)
			setNoti(styles.menu)
			setWallet(styles.menu)
		}
		if(text=="noti"){
			setMain(styles.menu)
			setPort(styles.menu)
			setNoti(styles.menu1)
			setWallet(styles.menu)
		}
		if(text=="wallet"){
			setMain(styles.menu)
			setPort(styles.menu)
			setNoti(styles.menu)
			setWallet(styles.menu1)
		}
		screench(text)
	}
    return(
        <>
            <button onClick={()=>screen("main")} style={main}><FaHouseUser/></button>
			<button onClick={()=>screen("port")} style={port}><FaBriefcase/></button>
			<button onClick={()=>screen("noti")} style={noti}><FaBell/></button>
			<button onClick={()=>screen("wallet")} style={wallet}><FaWallet/></button>
        </>
    )
}

const styles={
    menu:{
		minWidth:100,
		color:'orange',
		justifyContent:'center',
		fontSize:25,
		backgroundColor:'white',
		border:'0px solid white',
		height:'70px',
	},
	menu1:{
		minWidth:100,
		color:'#a6a5a4',
		justifyContent:'center',
		fontSize:25,
		backgroundColor:'white',
		border:'0px solid white',
		height:'70px',
	},
}

export default Menu