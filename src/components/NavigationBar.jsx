import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className="flex justify-end p-4">
            <div className="flex space-x-4">
                <NavLink
                    to="/"
                    className="text-blue-500 hover:underline"
                    activeClassName="font-bold"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/AlphabetQuizz"
                    className="text-blue-500 hover:underline"
                    activeClassName="font-bold"
                >
                    Alphabet Quizz
                </NavLink>
                <NavLink
                    to="/Learn"
                    className="text-blue-500 hover:underline"
                    activeClassName="font-bold"
                >
                    Apprendre
                </NavLink>
            </div>
        </div>
    );
}

export default NavigationBar;
