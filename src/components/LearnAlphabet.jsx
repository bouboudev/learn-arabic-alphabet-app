import arabicAlphabet from '../Alphabet';

function LearnAlphabet() {
    return (
        <div className="container mx-auto mt-8">
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-200 ">
                    <tr>
                        <th className="border border-gray-300 py-2 px-4">Isolé</th>
                        <th className="border border-gray-300 py-2 px-4">Initial</th>
                        <th className="border border-gray-300 py-2 px-4">Médian</th>
                        <th className="border border-gray-300 py-2 px-4">Final</th>
                        <th className="border border-gray-300 py-2 px-4">Nom</th>
                    </tr>
                </thead>
                <tbody>
                    {arabicAlphabet.map((letter, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 py-2 px-4 text-5xl">{letter.isolated}</td>
                            <td className="border border-gray-300 py-2 px-4 text-5xl">{letter.initial}</td>
                            <td className="border border-gray-300 py-2 px-4 text-5xl">{letter.middle}</td>
                            <td className="border border-gray-300 py-2 px-4 text-5xl">{letter.final}</td>
                            <td className="border border-gray-300 py-2 px-4 text-5xl">{letter.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LearnAlphabet;
