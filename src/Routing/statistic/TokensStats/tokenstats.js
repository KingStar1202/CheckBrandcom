import './style.scss'

const StatsToken = ({ children }) => {

    return (
        <div className='stats-token'>
            <div className='stats-token-main'>
                {children}
            </div>
        </div>

    )
}
export default StatsToken