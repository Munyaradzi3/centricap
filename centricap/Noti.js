import { useState } from 'react'
import {FaClock} from 'react-icons/fa'

function Noti(){
    const [list,setList]=useState([
        {"id":0,"name":'22/13/2022 22:30pm',"desc":'This is a sample notification'},
    ])

    return(
        <div style={styles.cont}>
            {list.map((item)=>
            <div style={styles.box}>
                <div style={styles.text}>
                    <p style={styles.name}><b><FaClock/>{item.name}</b></p>
                    <p style={styles.desc}>{item.desc}</p>                    
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
        height:'80px',
        backgroundColor:'white',
        display:'block',
        borderRadius:'3px'
    },
    text:{
        marginLeft:'10px',
    },
    name:{
        fontSize:17,
        paddingTop:'5px',
    },
    desc:{
        fontSize:13,
    },
    txt:{
        fontSize:13,
    },
    sp:{
        paddingLeft:'5px',
        paddingRight:'5px',
    },
}

export default Noti