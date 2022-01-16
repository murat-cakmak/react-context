import {MainContext, useContext} from "../context";

export default function Footer() {
    const {theme, setTheme, setTitle} = useContext(MainContext);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const changeTitle = () => {
        setTitle('Title 2');
    }

    return (
        <div>
            <button onClick={changeTheme}>Change</button>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    )
}
