import {FaUser,FaLock, FaPhone,FaAddressCard,FaCalendar, FaAddressBook} from 'react-icons/fa'
import {useState} from 'react'

function Register({screench,keyset}){
    const [btn1,setBtn]=useState(styles.btn)
    const [btn2,setBtn2]=useState(styles.btn3)
    const [fu,setFu]=useState('')
    const [su,setSu]=useState('')
    const [ad,setAd]=useState('')
    const [dob,setDo]=useState('')
    const [ph,setPh]=useState('')
    const [em,setEm]=useState('')
    const [pa,setPa]=useState('')
    const [co,setCo]=useState('')
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
    function name({target}){
        setFu(target.value)
    }
    function surname({target}){
        setSu(target.value)
    }
    function Address({target}){
        setAd(target.value)
    }
    function Dob({target}){
        setDo(target.value)
    }
    function phone({target}){
        setPh(target.value)
    }
    function email({target}){
        setEm(target.value)
    }
    function password({target}){
        setPa(target.value)
    }
    function con({target}){
        setCo(target.value)
    }

    function login(){
        screench("login")
    }
    function register(e){
        e.preventDefault()
        const url='https://mershcap.co.zw/app/createaccount.php?fullname='+fu+'&surname='+su+'&address='+ad+'&DoB='+dob+'&email='+em+'&phone='+ph+'&password='+pa
        if(co!=pa){
            setMsg("Passwords not matching")
        }
        else{
            fetch(url)
            .then((res)=>res.json())
            .then((resp)=>{
                if(resp[0]=="done"){
                    keyset(resp[1])
                    screench("main")
                }
                if(resp[0]=="exist"){
                    setMsg("An account with same details exist")
                }
                else{
                    setMsg("Internal error at server try again")
                }
            })
            .catch((error)=>{
                setMsg('Browser error')
            })
        }
    }

    return (
        <div style={styles.main}>
            <form>
                <i><FaUser/></i>
                <input type='text' placeholder='Name' style={styles.input} value={fu} onChange={name} />
                <br/>
                <i><FaUser/></i>
                <input type='text' placeholder='Surname' style={styles.input} value={su} onChange={surname}/>
                <br/>
                <i><FaAddressBook/></i>
                <input type='text' placeholder='Address' style={styles.input} value={ad} onChange={Address}/>
                <br/>
                <i><FaCalendar/></i>
                <input type='text' placeholder='Date of birth' style={styles.input} value={dob} onChange={Dob}/>
                <br/>
                <i><FaPhone/></i>
                <input type='text' placeholder='Phone' style={styles.input} value={ph} onChange={phone}/>
                <br/>
                <i><FaUser/></i>
                <input type='text' placeholder='Email' style={styles.input} value={em} onChange={email}/>
                <br/>
                <i><FaLock/></i>
                <input type='password' placeholder='Password' style={styles.input} value={pa} onChange={password}/>
                <br/>
                <i><FaLock/></i>
                <input type='password' placeholder='Confirm password' style={styles.input} value={co} onChange={con}/>
                <p style={styles.err}>{msg}</p>
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={(e)=>register(e)}>Register</button>
                </div>
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate2} onMouseLeave={btnleave2} style={btn2} onClick={login}>Login instead?</button>
                </div>
            </form>
        </div>
    )
}

const styles={
    main:{
        width:'85%',
        maxWidth:'400px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:'5%',
        padding:'20px',
        backgroundColor:'white',
        borderRadius:'15px',
        marginBottom:'20px',
    },
    input:{
        height:'30px',
        width:'300px',
        borderRadius:'5px',
        border:'2px solid grey',
        marginBottom:'20px',
        marginLeft:'5px',
        position:'relative',
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
    	paddingLeft:'50px',
    },
}

export default Register
