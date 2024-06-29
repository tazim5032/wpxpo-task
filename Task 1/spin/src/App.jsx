import  { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert';
import './App.css';

function App() {
  const initialOptions = ['Ibrahim', 'Jasim', 'Jisan', 'Teebro'];

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem('spinnerOptions');
    return savedOptions ? JSON.parse(savedOptions) : initialOptions;
  });
  const [newOption, setNewOption] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('spinnerOptions', JSON.stringify(options));
  }, [options]);

  const addOption = () => {
    if (newOption.trim() !== '') {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const resetOptions = () => {
    setOptions(initialOptions);
    localStorage.setItem('spinnerOptions', JSON.stringify(initialOptions));
  };

  const spinWheel = () => {
    if (isSpinning || options.length === 0) return;

    const degreesPerSegment = 360 / options.length;
    const randomIndex = Math.floor(Math.random() * options.length);
    const stopAngle = randomIndex * degreesPerSegment + 360 * 5 + (degreesPerSegment / 2); // Add half segment to align with the pointer
    setIsSpinning(true);

    wheelRef.current.style.transition = 'transform 4s ease-out';
    wheelRef.current.style.transform = `rotate(${stopAngle}deg)`;

    setTimeout(() => {
      setIsSpinning(false);

      Swal({
        title: 'Congratulations!',
        text: `The winner is ${options[randomIndex]}!`,
        icon: 'success',
      });
    }, 4000);
  };

  const colors = [
    '#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5',
    '#392F5A', '#31A2AC', '#61C0BF', '#6B4226', '#D9BF77'
  ];

  return (
    <div className="flex h-screen">
      
      <div className="w-1/2 flex flex-col items-center justify-center">
     
        <div className="relative">
          <div
            ref={wheelRef}
            className={`wheel ${isSpinning ? 'spinning' : ''}`}
            style={{
              transform: 'rotate(0deg)',
              transition: 'none',
            }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="segment"
                style={{
                  transform: `rotate(${index * (360 / options.length)}deg)`,
                  background: colors[index % colors.length],
                }}
              >
                <span>{option}</span>
              </div>
            ))}
          </div>
          <div className="pointer" />
        </div>
        <h1 className='text-3xl'>Please Do a Refresh Each Time Before a Spin </h1>
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-2xl mb-4">Spinner Options</h1>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{option}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Add new option"
          />
          <button onClick={addOption} className="bg-blue-500 text-white px-4 py-2">Add</button>
        </div>
        <button
          onClick={spinWheel}
          className="bg-green-500 text-white px-4 py-2 mr-2"
          disabled={isSpinning}
        >
          Spin It
        </button>
        <button
          onClick={resetOptions}
          className="bg-red-500 text-white px-4 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
