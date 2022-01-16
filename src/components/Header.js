import {MainContext, useContext} from "../context";
import {useState, useEffect} from 'react';

export default function Header() {
    const {theme, appendMethods} = useContext(MainContext);
    const [title, setTitle] = useState('Title 1');

    useEffect(() => {
        appendMethods({ setTitle });
    }, []);

    return (
        <div>
            Title: {title} <br/>
            Theme: {theme}
        </div>
    )
}
