import {FaUser,FaLock} from 'react-icons/fa'
import {useState} from 'react'

function Login({screench, keyset}){
    const [btn1,setBtn]=useState(styles.btn)
    const [btn2,setBtn2]=useState(styles.btn3)
    const [pa,setPa]=useState('')
    const [em,setEm]=useState('')
    const [msg,setMsg]=useState('')
    
    function btnstate(){
        setBtn(styles.btn2)
    }
    function btnleave(){
        setBtn(styles.btn)
    }
    function btnstate2(){
        setBtn2(styles.btn4)
    }
    function btnleave2(){
        setBtn2(styles.btn3)
    }
    function register(){
        screench("register")
    }
    function login(e){
        e.preventDefault()
        fetch('https://mershcap.co.zw/app/login.php?email='+em+'&password='+pa)
        .then((res)=>res.json())
        .then((resp)=>{
            if(resp[0]=="done"){
                keyset(resp[1])
                screench("main")
            }
            else{
                setMsg("Password or email incorrect")
            }
        })
        .catch((error)=>{
            setMsg("Browser error")
        })
    }
    function pass({target}){
        setPa(target.value)
    }
    function email({target}){
        setEm(target.value)
    }

    return (
        <div style={styles.main}>
            <form>
                <i><FaUser/></i>
                <input type='text' placeholder='Email' style={styles.input} value={em} onChange={email}/>
                <br/>
                <i><FaLock/></i>
                <input type='password' placeholder='Password' style={styles.input} value={pa} onChange={pass} />
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={(e)=>login(e)}>Login</button>
                </div>
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate2} onMouseLeave={btnleave2} style={btn2} onClick={register}>Register instead?</button>
                </div>
                <p style={styles.err}>{msg}</p>
            </form>
        </div>
    )
}

const styles={
    main:{
        width:'90%',
        maxWidth:'400px',
 		height:'70%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:'20%',
        backgroundColor:'white',
        borderRadius:'15px',
    },
    input:{
        height:'30px',
        width:'300px',
        borderRadius:'5px',
        border:'2px solid grey',
        marginBottom:'20px',
        marginLeft:'5px',
    },
    buttons:{
        paddingLeft:'40px',
    },
    btn:{
        margin:'20px',
        width:'200px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid #f5f4df',
        borderRadius:'5px',
        fontSize:16,
    },
    btn2:{
        margin:'20px',
        width:'200px',
        height:'30px',
        backgroundColor:'orange',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
    },
    btn3:{
        margin:'20px',
        width:'200px',
        height:'30px',
        backgroundColor:'white',
        border:'0px solid grey',
        borderRadius:'5px',
        fontSize:16,
    },
    btn4:{
        margin:'20px',
        width:'200px',
        height:'30px',
        backgroundColor:'white',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
    },
    err:{
    	fontSize:'14px',
    	paddingLeft:'80px',
    },
}

export default Login
