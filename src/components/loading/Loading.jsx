import './loading.scss';
import loading from './loading.svg'

const Loading = () => {
  return (
    <div className="Loading">
      <img src={loading} alt='Loading Icon' />
      <p>If it's Loading for to long you may have to give it locatoin permition and reloed</p>
    </div>
  )
}

export default Loading