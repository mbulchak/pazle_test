import './App.css';
import { allData } from './services/firstData';
import './App.css';

function App() {
  const allData3 = [];

  for (let data = 0; data < allData.length; data += 6) {
    const number =
      allData[data] +
      allData[data + 1] +
      allData[data + 2] +
      allData[data + 3] +
      allData[data + 4] +
      allData[data + 5];
    allData3.push(number);
  }

  const allMatches = [];
  let match = '';

  for (let number = 0; number < allData3.length; number++) {
    const first = allData3[number];

    let lastPart = first.slice(4);
    let firstPart = first.slice(0, 5);

    match = firstPart;

    for (let j = 0; j < allData3.length; j++) {
      if (allData3[j] === allData3[number]) {
        continue;
      }

      if (allData3[j].startsWith(lastPart)) {
        match += firstPart;

        lastPart = allData3[j].slice(4);
        firstPart = allData3[j].slice(0, 5);
      }
    }

    allMatches.push(match);
  }
  console.log(allMatches);

  const newNumberResult = allMatches.map((match) => +match);
  console.log(newNumberResult);

  const max = Math.max(...newNumberResult);

  console.log(max);

  return (
    <>
      <h2>Pazzle</h2>

      <div className="result">
        <div className="all-data">
          {allData3.map((data) => {
            return (
              <p className="data" key={data}>
                {data}
              </p>
            );
          })}
        </div>

        <div className='result__end'>
          <span>Результат </span>
          <span>{Math.max(...newNumberResult)}</span>
        </div>
      </div>
    </>
  );
}

export default App;
