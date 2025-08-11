import Likes from './like-button'

function Header({title}){
    return (<h1>{title ? title : 'Default title'}</h1>);
}

export default function Homepage(){   
    const names = ['ash', 'tyrone','lauren'];
    return (
        <>
            <h1>Homepage</h1>
            <Header title="react" />
            <ul>
                {names.map((name) =>
                    (<li key={name}>{name}</li>))
                }
            </ul>
            <Header/>
            <Likes/>
            
        </>
    );
}
