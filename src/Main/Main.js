import { useEffect, useState } from 'react';
import logo from './../images/logo-quiz-do-futuro.png';
import './Main.css';

let questions = [
    {
        q: 'Para trabalhar com programação eu preciso:',
        r1: 'Ser uma pessoa boa em matemática',
        r2: 'Ter usado computador desde criança e jogar video games',
        r3: 'Gostar de resolver problemas e trabalhar em equipe'
    }, {
        q: 'Para trabalhar com programação eu preciso:',
        r1: 'Ser uma pessoa boa em matemática',
        r2: 'Ter usado computador desde criança e jogar video games',
        r3: 'Gostar de resolver problemas e trabalhar em equipe'
    }, {
        q: 'Para trabalhar com programação eu preciso:',
        r1: 'Ser uma pessoa boa em matemática',
        r2: 'Ter usado computador desde criança e jogar video games',
        r3: 'Gostar de resolver problemas e trabalhar em equipe'
    }, {
        q: 'Para trabalhar com programação eu preciso:',
        r1: 'Ser uma pessoa boa em matemática',
        r2: 'Ter usado computador desde criança e jogar video games',
        r3: 'Gostar de resolver problemas e trabalhar em equipe'
    }, {
        q: 'Para trabalhar com programação eu preciso:',
        r1: 'Ser uma pessoa boa em matemática',
        r2: 'Ter usado computador desde criança e jogar video games',
        r3: 'Gostar de resolver problemas e trabalhar em equipe'
    }
]

let answers = ['r3', 'r1', 'r2', 'r1', 'r3'];

function Main() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [points, setPoints] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        console.log('rerenderizando');
    }, []);

    function answered(answer) {
        if (answer === answers[questionNumber]) {
            setPoints(points + 1);
        };

        if (questionNumber === answers.length - 1) {
            setFinished(true);
        };

        setQuestionNumber(questionNumber + 1);
    }

    function playAgain() {
        setFinished(false);
        setPoints(0);
        setQuestionNumber(0);
    }

    return (
        <>
            <div className='container'>
                <div className='title'>
                    <img src={logo} alt="logo" onClick={() => playAgain()}/>
                </div>

                {
                    finished ?
                        <div className='container-result'>
                            <div className='text'>PARABÉNS!</div>
                            <div className='text'>VOCÊ ACERTOU {points} DE {questionNumber} PERGUNTAS</div>
                            <div className='button' onClick={() => playAgain()}>Voltar para o início</div>
                        </div>
                        :
                        <>
                            <div className='container-questions'>
                                <div className='question-title'>
                                    {questions[questionNumber].q}
                                </div>
                                <div className='answer' onClick={() => answered('r1')}>
                                    {questions[questionNumber].r1}
                                </div>
                                <div className='answer' onClick={() => answered('r2')}>
                                    {questions[questionNumber].r2}
                                </div>
                                <div className='answer' onClick={() => answered('r3')}>
                                    {questions[questionNumber].r3}
                                </div>
                            </div>
                            <div className='counter'>{questionNumber + 1}/{answers.length}</div>
                        </>
                }

            </div>
        </>
    );
}

export default Main;