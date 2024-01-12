import { Link } from 'react-router-dom';

function Accueil() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
                <p className="text-lg mb-8">Un projet React pour apprendre l&apos;alphabet arabe de manière ludique.</p>
                <Link to="/AlphabetQuizz">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Commencer</button>
                </Link>
            </div>
        </div>
    );
}

export default Accueil;
