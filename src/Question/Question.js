import { useState } from 'react';
import './Question.css';

function Question({question}) {
    const [questionNumber, setQuestionNumber] = useState(0);
    console.log(question)

    return (
        <>
            <div className='container'>
                <div className='quetion-title'>
                    
                </div>
                <div className='answer'>
                    a
                </div>
                <div className='answer'>
                    a
                </div>
                <div className='answer-1'>
                    a
                </div>
            </div>

        </>
    );
}

export default Question;