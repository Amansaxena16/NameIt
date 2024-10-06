import React, { useEffect } from 'react';
import nameGenerator from '@rstacruz/startup-name-generator'; 

const url = 'https://www.namecheap.com/domains/registration/results/?domain='

function ResultCard({ keyword }) {
    let suggestName = []

    if(keyword.length > 0){
        suggestName = nameGenerator(keyword)
    }

    let words = []
    for(let i = 0; i<suggestName.length; i++){
        words.push(<li className='text-white'>{suggestName[i]}</li>);
    }
    
    
    return (
        <div className='mb-20'>
            <ul className='ul'>
                <a href={`${url}${keyword}`}>
                    <li className='li'>{keyword}</li>
                </a>
                {suggestName.map((word, index) => (
                    <a href={`${url}${word}`}>
                        <li key={index} className='li'>{word}</li>
                    </a>
                    ))}
            </ul>
        </div>
);
}

export default ResultCard;
