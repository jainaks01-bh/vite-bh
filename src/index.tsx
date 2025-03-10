import { createRoot } from 'react-dom/client'
import App from 'components/App'
import { applyPolyfills, defineCustomElements } from '@bh-digitalsolutions/ui-toolkit/loader';


// applyPolyfills().then(async () => {
//   await import('@bh-digitalsolutions/ui-toolkit/dist/esm/bh-a_26.entry.js');
//   defineCustomElements(window);
// });
if (import.meta.env.DEV) {
  console.log('Development mode');
  applyPolyfills().then(() => {
    defineCustomElements();
  });
} else {
  applyPolyfills().then(async () => {
    await import('@bh-digitalsolutions/ui-toolkit/dist/esm/bh-a_26.entry.js');
    await import('@bh-digitalsolutions/ui-toolkit/dist/esm/bh-menu.entry.js');
    await import('@bh-digitalsolutions/ui-toolkit/dist/index.js');
    defineCustomElements(window);
  });
}
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
