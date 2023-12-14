import { Box, Tabs } from '@radix-ui/themes'
import Body from './Body'
import Time from './Time'


export default function MainPage() {
  return (
  <div className="max-w-2xl mx-auto border p-5 m-5">
      <Tabs.Root defaultValue="Time">
    <Tabs.List className='flex justify-center'>
      <Tabs.Trigger value="Time">Time</Tabs.Trigger>
      <Tabs.Trigger value="Stopwatch">Stopwatch</Tabs.Trigger>
    </Tabs.List>
  
    <Box px="4" pt="3" pb="2">
      <Tabs.Content value="Time">
        <Time/>
      </Tabs.Content>

      <Tabs.Content value="Stopwatch">
        <Body/>
      </Tabs.Content>
  
    </Box>
  </Tabs.Root>
  </div>
  
  )
}
