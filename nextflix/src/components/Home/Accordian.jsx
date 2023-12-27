import Plus from '../../assets/Plus.svg'
export default function Accordian(props) {
  const {title} = props
  return (
    <div className='bg-[#404040] h-[72px] flex justify-between items-center mx-9 p-4'>
      <span className='text-white text-lg'>{title}</span>
      <img className='w-10' src={Plus} alt="" />
    </div>
  )
}
