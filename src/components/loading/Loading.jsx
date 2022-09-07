import './loading.scss';
import loading from './loading.svg'

const Loading = () => {
  return (
    <div className="Loading">
      <img src={loading} alt='Loading Icon' />
    </div>
  )
}

export default Loading