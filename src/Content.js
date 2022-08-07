import React from 'react'

const Content = () => {
    const handleChange = () => {
        const names = ["Jerry", "Beatrice", "Lovers"];
        let int = Math.floor(Math.random() * 3);
        return names[int];
    }
    return (
        <main>
            <p>
                Hi {handleChange()}
            </p>
        </main>
    )
}

export default Content