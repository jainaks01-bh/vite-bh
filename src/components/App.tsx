import {
  applyPolyfills,
  defineCustomElements
} from '@bh-digitalsolutions/ui-toolkit/loader'
import { BhButton } from '@bh-digitalsolutions/ui-toolkit-react/dist/components'
applyPolyfills().then(() => {
  defineCustomElements()
})
function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div>Hello</div>
      <BhButton
        label="Go to Datahub Detail"
        onClick={() => {
          alert('clicked!')
        }}
      />
    </div>
  )
}

export default App
