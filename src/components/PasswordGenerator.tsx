import usePasswordStore from "../store/store";

const PasswordGenerator = () => {
  const {
    length,

    includeNumbers,

    includeSymbols,

    includeUppercase,

    includeLowercase,

    generatedPassword,

    setLength,

    toggleNumbers,

    toggleSymbols,

    toggleUppercase,

    toggleLowercase,

    generatePassword,
  } = usePasswordStore();

  function handleGeneratePassword() {
    generatePassword();
  }

  return (
    <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="mb-4 text-2xl font-bold">Password Generator</h1>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Password Length
          </label>
          <input
            type="number"
            id="length"
            value={length===0?'':length}
            onChange={(e) => setLength(+e.target.value)}
            min={4}
            max={64}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* numbers  */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={toggleNumbers}
          />
          <label className="ml-2 text-sm">Include Numbers</label>
        </div>

        {/* Symbols  */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={toggleSymbols}
          />
          <label className="ml-2 text-sm">Include Symbols</label>
        </div>
        {/* Uppercase  */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={toggleUppercase}
          />
          <label className="ml-2 text-sm">Include Uppercase</label>
        </div>

        {/* Lowercase  */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={toggleLowercase}
          />
          <label className="ml-2 text-sm">Include Lowercase</label>
        </div>

        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Generate Password
        </button>

        {generatedPassword && (
          <div className="p-4 mt-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
