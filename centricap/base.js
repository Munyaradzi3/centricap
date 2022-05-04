import {useState,useEffect} from 'react'


import Screen from './switch.js'
import Footer from './footer.js'

function Base(){
	const [screen,setName]=useState("home")
	const [foot,setFoot]=useState('home')
	const [user,setUser]=useState('')
	const [btn1,setBtn]=useState(styles.btn1)
	const [vis,setVis]=useState('hid')

	function setkey(text){
		setUser(text)
	}
    
    function btnstate(){
		if(vis=='vis'){
        	setBtn(styles.btn2)
		}
    }
    function btnleave(){
        if(vis=='vis'){
			setBtn(styles.btn)
		}
    }

	function log(e){
		setUser('')
		setName("login")
		setVis('hid')
		setFoot('blank')
		setBtn(styles.btn1)
	}

	function screenchange(text){
		if(text=="login" | text=="register"){
			setName(text)
			setBtn(styles.btn1)
			setFoot('blank')
		}
		else{
			setName(text)
			setBtn(styles.btn)
			setFoot('menu')
			setVis('vis')
		}
	}
	return(
		<div style={styles.cont}>
			<div style={styles.placer}>
				<h2 style={{color:'orange'}}>CentriCap.</h2>
				<button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={(e)=>log(e)}>Logout</button>
			</div>
			<div style={styles.body}>
				<Screen screen={screen} screenchange={screenchange} userkey={user} setkey={setkey}/>
			</div>
			<div style={styles.nav}>
				<Footer foot={foot} screenchange={screenchange}/>
			</div>
		</div>
	)
}

const styles={
	cont:{
		display:'flex',
		justifyContent:'center',
	},
	placer:{
		display:'flex',
		width:'100%',
		justifyContent:'center',
		alignItems:'center',
		position:'fixed',
		top:0,
		backgroundColor:'white',
		
	},
	body:{
		position:'absolute',
		top:60,
		display:'flex',
		bottom:65,
		left:0,
		right:0,
		width:'100%',
		backgroundColor:'#f5f4df',
		justifyContent:'center',
		zIndex:'-1',
	},
	nav:{
		display:'flex',
		position:'fixed',
		bottom:0,
		justifyContent:'center',
		paddingLeft:'10px',
		backgroundColor:'white',
		zIndex:1,
		width:'100%',
		borderTop:'1px solid #a6a5a4'
	},
	btn:{
        margin:'20px',
        width:'92px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid #f5f4df',
        borderRadius:'5px',
        fontSize:16,
		float:'right',
		position:'absolute',
		right:5,
    },
	btn1:{
        visibility:'hidden'
    },
    btn2:{
        margin:'20px',
        width:'92px',
        height:'30px',
		float:'right',
        backgroundColor:'orange',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
		position:'absolute',
		right:5,

    },
}

export default Base
