import Title from "../../components/Title/Title"
import InputForm from "../../components/InputForm/InputForm"
import List from "../../components/List/List"
import ListItem from "../../components/ListItem/ListItem"

export default function MainPage(props) {
    return (
        <main>
            <Title text="My To Do List:"/>
            <InputForm/>
        </main>
    )
}