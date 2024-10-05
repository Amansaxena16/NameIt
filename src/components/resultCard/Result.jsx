import React, { useEffect } from 'react';
import nameGenerator from '@rstacruz/startup-name-generator'; 

function ResultCard({ keyword }) {
    let suggestName = []

    if(keyword.length > 0){
        suggestName = nameGenerator(keyword)
    }
    // console.log(suggestName[2]);

    let words = []
    for(let i = 0; i<suggestName.length; i++){
        words.push(<li className='text-white'>{suggestName[i]}</li>);
    }
    // console.log(words[4]);
    
    
    return (
        <div>
            <ul>
                {/* {suggestName.map((word, index) => (
                    <li key={index} className='text-white'>{word}</li>
                    ))} */}
                {/* {() => {
                    for(let i = 0; i<suggestName.length; i++){
                        <li key={i} className='text-white'>{suggestName[i]}</li>
                    }
                }} */}
                {words}
            </ul>
        </div>
    );
}

export default ResultCard;
