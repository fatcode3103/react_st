function UserManagement() {
    return (
        <div className="p-6">
            <h1 className="text-orange-600 text-center text-4xl mb-10">
                User management
            </h1>
            <table className="w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Company</th>
                        <th className="py-2 px-4 border-b">Contact</th>
                        <th className="py-2 px-4 border-b">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="py-2 px-4 border-b">
                            Alfreds Futterkiste
                        </td>
                        <td className="py-2 px-4 border-b">Maria Anders</td>
                        <td className="py-2 px-4 border-b">Germany</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">
                            Centro comercial Moctezuma
                        </td>
                        <td className="py-2 px-4 border-b">Francisco Chang</td>
                        <td className="py-2 px-4 border-b">Mexico</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-2 px-4 border-b">Ernst Handel</td>
                        <td className="py-2 px-4 border-b">Roland Mendel</td>
                        <td className="py-2 px-4 border-b">Austria</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Island Trading</td>
                        <td className="py-2 px-4 border-b">Helen Bennett</td>
                        <td className="py-2 px-4 border-b">UK</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-2 px-4 border-b">
                            Laughing Bacchus Winecellars
                        </td>
                        <td className="py-2 px-4 border-b">Yoshi Tannamuri</td>
                        <td className="py-2 px-4 border-b">Canada</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">
                            Magazzini Alimentari Riuniti
                        </td>
                        <td className="py-2 px-4 border-b">Giovanni Rovelli</td>
                        <td className="py-2 px-4 border-b">Italy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserManagement;
