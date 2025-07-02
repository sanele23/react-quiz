function Progress( {index, numQuestions, points, maxPossiblePoints, answer} ) {
    return (
        <header className="progress">
            {/* progress bar */}
            <progress max={numQuestions} value={index + Number (answer !== null )} />

            {/* questions and points */}
            <p>
                Question <strong>{index + 1}</strong> / {numQuestions} 
            </p>

            <p><strong>{points}</strong> / {maxPossiblePoints}</p>
        </header>
    )
}

export default Progress;