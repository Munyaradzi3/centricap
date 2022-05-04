import { useState,useEffect } from 'react'

function Project({screench, selected}){
    const [btn1,setBtn]=useState(styles.btn)
    const [proj,setProj]=useState([])
    const [msg,setMsg]=useState('')
    
    function btnstate(){
        setBtn(styles.btn2)
    }
    function btnleave(){
        setBtn(styles.btn)
    }

    function invest(){
        screench("invest")
    }
    useEffect(()=>{
        fetch('/app/projects.php?project_id='+selected)
        .then((res)=>res.json())
        .then((resp)=>{
            if(resp=="none"){
                setMsg("Internal error")
            }
            else{
                setProj(resp)
            }
        })
        .catch((error)=>{
            setMsg('Browser error')
        })
    })

    return(
        <div style={styles.cont}>
        <div style={styles.main}>
            <p>{msg}</p>
            <p style={styles.head}><u>{proj[1]}</u></p>
            <p style={styles.txt}>{proj[2]}</p>
            <p style={styles.txt1}>Expected return:<b style={styles.sp}>{proj[3]}%</b>  Lifespan:<b style={styles.sp}>{proj[4]} months</b>    Available capital:<b style={styles.sp}>{proj[5]}%</b></p>
            <p style={styles.link}>Prospectus link</p>
        </div>
        <div style={styles.buttons}>
            <button onMouseEnter={btnstate} onMouseLeave={btnleave} style={btn1} onClick={invest}>Invest</button>
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
        width:'350px',
        height:'60%',
        borderRadius:'8px',
        position:'relative',
        top:'10%',
    },
    head:{
        fontSize:18,
    },
    txt:{
        fontSize:11,
    },
    txt1:{
        fontSize:12,
    },
    link:{
        fontSize:14,
        color:'blue',
    },
    buttons:{
        position:'absolute',
        top:'85%',
        paddingLeft:'140px',
    },
    btn:{
        margin:'20px',
        width:'130px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid #f5f4df',
        borderRadius:'5px',
        fontSize:16,
    },
    btn2:{
        margin:'20px',
        width:'130px',
        height:'30px',
        backgroundColor:'orange',
        border:'2px solid #1953e6',
        borderRadius:'5px',
        fontSize:16,
    },
}

export default Project