
import Body from './Body'
import Time from './Time'


export default function MainPage() {
  return (
    <div className='flex flex-col lg:flex-row max-w-sm mx-auto sm:max-w-xl lg:max-w-6xl justify-around h-screen'>
       <Time/>
        <Body/>
    </div>
  )
}
