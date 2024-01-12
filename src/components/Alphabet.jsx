import arabicAlphabet from '../Alphabet';

function Alphabet({ isVisible, onClose }) {
    const firstColumn = arabicAlphabet.slice(0, 9);
    const secondColumn = arabicAlphabet.slice(9, 19);
    const treeColumn = arabicAlphabet.slice(19);

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black/50 ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="bg-white p-6 rounded shadow-lg flex">
                <div className="flex-1">
                    <table className="w-full">
                        <tbody>
                            {firstColumn.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-lg mb-2">{item.isolated}</td>
                                    <td className="text-lg mb-2">{item.initial}</td>
                                    <td className="text-lg mb-2">{item.medial}</td>
                                    <td className="text-lg mb-2">{item.final}</td>
                                    <td className="text-lg mb-2">{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-1 ml-4">
                    <table className="w-full">
                        <tbody>
                            {secondColumn.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-lg mb-2">{item.isolated}</td>
                                    <td className="text-lg mb-2">{item.initial}</td>
                                    <td className="text-lg mb-2">{item.medial}</td>
                                    <td className="text-lg mb-2">{item.final}</td>
                                    <td className="text-lg mb-2">{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        className="bg-slate-900 hover:bg-slate-700 text-white py-2 px-4 rounded mx-2 mt-4"
                        onClick={onClose}
                    >
                        Fermer
                    </button>
                </div>
                <div className="flex-1 ml-4">
                    <table className="w-full">
                        <tbody>
                            {treeColumn.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-lg mb-2">{item.isolated}</td>
                                    <td className="text-lg mb-2">{item.initial}</td>
                                    <td className="text-lg mb-2">{item.medial}</td>
                                    <td className="text-lg mb-2">{item.final}</td>
                                    <td className="text-lg mb-2">{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Alphabet;
