import { useState } from 'react'

function Deposit({user}){
    const [btn1,setBtn]=useState(styles.btn)
    const [amount,setAmn]=useState()
    const [msg,setMsg]=useState('')
    
    function btnstate(){
        setBtn(styles.btn2)
    }
    function btnleave(){
        setBtn(styles.btn)
    }
    function stamount({target}){
        setAmn(target.value)
    }
    function deposit(e){
        e.preventDefault()
        const url='/app/deposit.php?key='+user+'&amount='+amount
        fetch(url)
        .then((res)=>res.json())
        .then((resp)=>{
            setMsg(resp)
        })
        .catch((error)=>{
            setMsg('Browser error')
        })
    }

    return (
        <div style={styles.main}>
            <form>
                <p>{msg}</p>
                <select id="payments" name="deposit" style={styles.input}>
                    <option>Ecocash</option>
                    <option>Onemoney</option>
                    <option>Telecahs</option>
                    <option>Zipit transfer</option>
                </select>
                <br/>
                <input type='text' placeholder='Amount to deposit' style={styles.input} value={amount} onChange={stamount}/>
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={(e)=>deposit(e)}>Deposit</button>
                </div>
            </form>
        </div>
    )
}

const styles={
    main:{
        height:'200px',
        width:'400px',
        marginTop:'20px',
        justifyContent:'center',
        display:'flex',
        position:'absolute',
        top:'27%',
        paddingLeft:'60px'
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
        margin:'30px',
        width:'200px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid #f5f4df',
        borderRadius:'5px',
        fontSize:16,
    },
    btn2:{
        margin:'30px',
        width:'200px',
        height:'30px',
        backgroundColor:'orange',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
    },
}

export default Deposit