// import React from 'react';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;
import { Theme, GlobalStyles } from './themes';
import { Rotas } from './routes';

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Rotas />
    </Theme>
  );
};

export default App;