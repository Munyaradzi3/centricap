import { useState } from 'react'

function Invest({user,selected}){
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
    function invest(e){
        e.preventDefault()
        const url='/app/invest_project.php?key='+user+'&amount='+amount+'&project_id='+selected
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
                <h3>Invest into this project</h3>
                <p>{msg}</p>
                <input type='text' placeholder='Amount to invest' style={styles.input} value={amount} onChange={stamount}/>
                <div style={styles.buttons}>
                    <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={(e)=>invest(e)}>Invest</button>
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

export default Invest