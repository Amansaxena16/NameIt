import name from '@rstacruz/startup-name-generator';

function ResultCard({keyword}) {
    const generatedName = name(cloud); 
    return (
        <>
            <h2>Generated Name:</h2>
            <p>{generatedName}</p>
        </>
    );
}

export default ResultCard;
