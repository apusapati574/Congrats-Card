/* eslint-disable no-undef */
const element = (
  <div className='card-bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' className='profile-img' />
      <h1 className='name'>Kiran V</h1>
      <p className='description'>
        Vishnu Institute of Computer Education and Technology,
        Bhimavaram
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' className='gadget-img' />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));