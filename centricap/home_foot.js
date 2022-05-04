import {FaCopyright} from 'react-icons/fa'

function Home_foot(){
    return (
        <>
            <p style={styles.txt}>
                This app was built by Centrigate Inc<FaCopyright/>. All rights reserved.
                Contact:+263774187978
            </p>
        </>
    )
}

const styles={
    txt:{
        fontSize:10,
        position:'absolute',
        bottom:15,
    },
}

export default Home_foot