import {useState} from 'react'
import {FaCopyright} from 'react-icons/fa'

function Home ({screench}){
    const [btn1,setBtn]=useState(styles.btn)
    const [btn2,setBtn2]=useState(styles.btn)
    
    function btnstate(){
        setBtn(styles.btn2)
    }
    function btnleave(){
        setBtn(styles.btn)
    }
    function btnstate2(){
        setBtn2(styles.btn2)
    }
    function btnleave2(){
        setBtn2(styles.btn)
    }
    function login(){
        screench("login")
    }
    function register(){
        screench("register")
    }
    return(
    	<div style={styles.body}>
        <div style={styles.root}>
            <div style={styles.texts}>
                <p style={styles.name}>powered by <b>Centrigate Inc</b><FaCopyright/></p>
                <p style={styles.motto}>Let's see how far we can go.</p>
            </div>
            <div style={styles.buttons}>
                <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={login}>Login</button>
                <button onMouseEnter={btnstate2} onMouseLeave={btnleave2} style={btn2} onClick={register}>Register</button>
            </div>
        </div>
        </div>
    )
}

const styles={
	body:{
		display:'flex',
		left:0,
		right:0,
		width:'100%',
		heigth:'100%',
		backgroundColor:'#f5f4df',
		backgroundImage:'url("http://localhost:3000/bg.jpeg")',
		justifyContent:'center',
		zIndex:'-1',
	},
    root:{
    	display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:'35%',
        borderRadius:'15px',
        backgroundColor:'white',
        width:'90%',
        maxWidth:'400px',
        height:'30%',
    },
    texts:{
    	position:'absolute',
    	top:'0%',
    },
    name:{
        fontSize:20,
    },
    motto:{
        fontSize:13,
        paddingLeft:'50px',
    },
    buttons:{
		position:'absolute',
		bottom:'0%',
    },
    btn:{
        margin:'20px',
        width:'92px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid #f5f4df',
        borderRadius:'5px',
        fontSize:16,
    },
    btn2:{
        margin:'20px',
        width:'92px',
        height:'30px',
        backgroundColor:'orange',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
    },
}

export default Home
