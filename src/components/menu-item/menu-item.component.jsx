import React, { useState } from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, PlayList}) =>{ 

    const [showPlayList, setShowPlayList] = useState(false);
    

    const onClickButton=()=>{
        setShowPlayList(!showPlayList)
      
 }
 return (
    <div 
     style={{
        backgroundImage:`url(${imageUrl})`
    }}
    
    className='menu-item'>

<h1 className='title'>{title}</h1>
<button style= { { width:100, height: 50}} onClick={() => onClickButton()}>
    <text> {showPlayList?
         'Hide PlayList': 'Show PlayList'
         
}</text>
</button>

{showPlayList && 


    PlayList.map((song, index) => (
        <div key={'song'+ index }>{song}</div>
        
    )
    )  
 }
 </div>
 )
  }



export default MenuItem;