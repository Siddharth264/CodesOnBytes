
import Body from './Body'
import Time from './Time'


export default function MainPage() {
  return (
    <div className='flex flex-col lg:flex-row max-w-xs mx-auto lg:max-w-5xl justify-around h-screen'>
       <Time/>
        <Body/>
    </div>
  )
}
