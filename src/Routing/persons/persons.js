import Main from "../../Components/main/Main"
import {useState} from 'react'
import {MainTitle} from '../../Components/main/MainTitle'
import {Link} from 'react-router-dom';

const Persons = () => {
    const [value, setValue] = useState('')

    const filteredNames = MainTitle.filter(people => {
        return people.person.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <>
            <Main value={value} setValue={setValue} />
            <div className="wrapper">
                <span className={'wrapper__title'}>Trending in Person</span>
                <div className='main-list'>
                    {filteredNames.map((item, index) => {
                        return (
                            <Link to={`/${index}`} className='main-person' key={index}>
                                <img src={item.photo} alt='account-card' onClick={() => console.log(index)} />
                            </Link>
                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}
export default Persons