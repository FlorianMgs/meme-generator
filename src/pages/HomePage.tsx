import React from 'react'
import Header from '../components/Header'
import MemeForm from '../components/MemeForm'

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <Header />
            <main className='content'>
                <MemeForm />
            </main>
        </div>
    )
}

export default HomePage
