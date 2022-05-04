import { useState, useEffect } from 'react'
import {FaPlus, FaClock, FaBullseye} from 'react-icons/fa'

function Main({screench,user, list, lister, selected}){
    const [msg,setMsg]=useState('')

    function project(id){
        selected(id)
        screench("project")
    }

    useEffect(()=>{
        fetch('https://mershcap.co.zw/app/projects.php?project_id=all')
        .then((res)=>res.json())
        .then((resp)=>{
            lister(resp)
        })
    })

    return(
        <div style={styles.cont}>
            <p>{msg}</p>
            {list.map((item)=>
            <div style={styles.box} onClick={()=>project(item.project_id)}>
                <div style={styles.img}>

                </div>
                <div style={styles.text}>
                    <p style={styles.name}><b>{item.name}</b></p>
                    <p style={styles.desc}>{item.descr}</p>                    
                    <p style={styles.txt}><FaPlus/><b style={styles.sp}>{item.return}%</b><FaClock/> <b style={styles.sp}>{item.time} months</b> <FaBullseye/> <b style={styles.sp}>{item.target}%</b></p>
                </div>
            </div>)}
            <div style={{height:'100px'}}>

            </div>
        </div>
    )
}

const styles={
    cont:{
        display:'flex',
        justfyContent:'center',
        margin:'10px',
        display:'block',
        backgroundColor:'#f5f4df',
    },
    box:{
        width:'350px',
        height:'120px',
        backgroundColor:'white',
        borderBottom:'0px solid grey',
        borderRadius:'5px',
        display:'block',
    },
    img:{
        width:'80px',
        height:'120px',
        backgroundColor:'white',
        borderRight:'1px solid #f5f4df',
        borderTopLeftRadius:'5px',
        borderBottomLeftRadius:'5px',
        float:'left',
    },
    text:{
        marginLeft:'90px',
    },
    name:{
        fontSize:18,
        paddingTop:'5px',
    },
    desc:{
        fontSize:13,
        textOverflow:'ellipsis',
        wordWrap:'break-word',
        overflow:'hidden',
        maxHeight:'3.6em',
        lineHeight:'1.8em',
    },
    txt:{
        fontSize:13,
    },
    sp:{
        paddingLeft:'5px',
        paddingRight:'5px',
    },
}

export default Main
