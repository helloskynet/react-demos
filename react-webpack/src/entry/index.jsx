import React from 'react';
import ReactDOM from 'react-dom';

const ENTRY_NUM = 12;

function IndexList() {
  let hre = [];
  for (var i = 1; i <= ENTRY_NUM; i++) {
    let q = i;
    if (i < 10) {
      q = '0' + i;
    }
    hre.push(
      <li>
        <a href={`./demo${q}/index.html`}>{`demo${q}`}</a>
        <br />
        <br />
      </li>
    );
  }
  console.log(hre);
  return (
    <div>
      <h1>DEMO LIST</h1>
      <ol>{hre}</ol>
    </div>
  );
}

ReactDOM.render(<IndexList />, document.getElementById('example'));
