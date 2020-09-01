import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/base.scss';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__box">
        First box
      </div>
    </div>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Home/>, document.getElementById('root'));
}
