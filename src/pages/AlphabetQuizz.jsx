import arabicAlphabet from '../Alphabet';
import { useState, useEffect } from 'react';
import Alphabet from '../components/Alphabet';

const letterTypes = ['isolated', 'initial', 'middle', 'final'];

function getRandomLetterType() {
    const randomIndex = Math.floor(Math.random() * letterTypes.length);
    return letterTypes[randomIndex];
}

function AlphabetQuizz() {
    const [showAlphabet, setShowAlphabet] = useState(false);
    const [letterType, setLetterType] = useState('isolated');

    const [input, setInput] = useState('');
    const [current, setCurrent] = useState(0);

    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    const [error, setError] = useState(false);

    const [isCorrect, setIsCorrect] = useState(false);

    const setRandomArabicLetter = () => {
        const randomIndex = Math.floor(Math.random() * arabicAlphabet.length);
        setCurrent(randomIndex);
        setLetterType(getRandomLetterType()); //
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.toLowerCase() === arabicAlphabet[current].name) {
            setStreak(streak + 1);
            const updatedMaxStreak = streak + 1 > maxStreak ? streak + 1 : maxStreak + 1;
            setMaxStreak(updatedMaxStreak);

            localStorage.setItem('streak', streak + 1);
            localStorage.setItem('maxStreak', updatedMaxStreak);
            setError(false);
            setIsCorrect(true);
        } else {
            const l = arabicAlphabet[current][letterType];
            const n = arabicAlphabet[current].name;
            setStreak(0);
            localStorage.setItem('streak', 0);
            setError(`Faux, La bonne réponse pour ${l} c'est : ${n}`);
            setIsCorrect(false);
        }

        setInput('');
        setRandomArabicLetter();
    };

    const handleReset = () => {
        setStreak(0);
        setMaxStreak(0);
        setError(false);
        localStorage.setItem('streak', 0);
        localStorage.setItem('maxStreak', 0);
    };

    useEffect(() => {
        setRandomArabicLetter();
        setStreak(parseInt(localStorage.getItem('streak')) || 0);
        setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0);
    }, []);

    return (
        <>
            <div className="min-h-screen bg-slate-800 text-white text-center">
                <header className="p-6 mb-8">
                    <h1 className="text-4xl font-bold uppercase"> Apprendre l&apos;alphabet Arabe </h1>
                    <div>
                        <h2 className="text-3xl font-bold">
                            {streak}/{maxStreak}
                        </h2>
                    </div>
                </header>

                <div className="text-9xl font-bold mb-8">{arabicAlphabet[current][letterType]}</div>
                <div className="mb-8">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2"
                            type="text"
                            onChange={handleChange}
                            value={input}
                            autoFocus
                        />
                    </form>
                </div>
                <div className="text-2xl font-bold">{error}</div>
                <button
                    className="mt-8 bg-slate-900 hover:bg-slate-700 text-white py-2 px-4 rounded mx-2"
                    onClick={handleReset}
                >
                    Recommencer
                </button>
                <button
                    className="mt-8 bg-slate-900 hover:bg-slate-700 text-white py-2 px-4 rounded mx-2"
                    onClick={() => setShowAlphabet(!showAlphabet)}
                >
                    {showAlphabet ? "Cacher l'alphabet" : "Montrer l'alphabet"}
                </button>
                <Alphabet
                    isVisible={showAlphabet}
                    onClose={() => setShowAlphabet(false)}
                />
            </div>
        </>
    );
}

export default AlphabetQuizz;
