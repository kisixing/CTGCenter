import React from 'react';
import ReactDOM from 'react-dom';

// 结论模板
import DiagnosticTemplate from './DiagnosticTemplate';

function App(params) {
  return (
    <div>
      <div></div>
      <div>
        <DiagnosticTemplate />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
