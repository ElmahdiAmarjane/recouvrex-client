// import ReactDOM from 'react-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter } from 'react-router-dom';

// // import 'nprogress/nprogress.css';
// import App from 'src/App';
// import { SidebarProvider } from 'src/contexts/SidebarContext';
// import * as serviceWorker from 'src/serviceWorker';

// ReactDOM.render(
//   <HelmetProvider>
//     <SidebarProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </SidebarProvider>
//   </HelmetProvider>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
// import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>
);

serviceWorker.unregister();
