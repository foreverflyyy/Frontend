import './MyInput.module.css'

export default function MyInput({...props}) {
  return (
    <div>
        <input className='myImput' {...props}/>
    </div>
  )
}
