import { useState , useEffect} from 'react'

function Wallet({screench,user}){
    const [btn1,setBtn]=useState(styles.btn)
    const [btn2,setBtn2]=useState(styles.btn)
    const [details,setDet]=useState([])
    const [msg,setMsg]=useState('')
    
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

    function change(text){
        screench(text)
    }
    useEffect(()=>{
        const url='/app/wallet.php?key='+user
        fetch(url)
        .then((res)=>res.json())
        .then((resp)=>{
            if(resp[0]=="error"){
                setMsg('Internal error')
            }
            else{
                setDet(resp)
            }
        })
        .catch((error)=>{
            setMsg('Browser error')
        })
    })
    return(
        <div style={styles.cont}>
            <p>{msg}</p>
            <div style={styles.main}>
                <p style={styles.head}><u>Mr/Mrs {details[0]}</u></p>
                <p style={styles.txt}>Free:${details[4]}</p>
                <p style={styles.txt}>Invested:${details[3]}</p>
                <p style={styles.txt}>Balance:${details[1]}</p>
            </div>
            <div style={styles.buttons}>
                <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={()=>change("deposit")}>Deposit</button>
                <button onMouseEnter={btnstate2} onMouseLeave={btnleave2} style={btn2} onClick={()=>change("withdraw")}>Withdraw</button>
            </div>
        </div>
    )
}

const styles={
    cont:{
        display:'flex',
        justfyContent:'center',
    },
    main:{
        backgroundColor:'white',
        padding:'10px',
        width:'300px',
        height:'200px',
        borderRadius:'8px',
        position:'relative',
        top:'30%',
    },
    head:{
        fontSize:18,
    },
    buttons:{
        position:'absolute',
        top:'75%',
        paddingLeft:'30px',
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

export default Wallet