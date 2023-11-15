import { ContactElement } from "components/ContactElement"
export const ContactList = ({array, deleteContact}) => {
return (

    <ul>
       {array.map((el) => (
        <ContactElement key = {el.id} elm ={el} deleteContact={deleteContact}/>
       ))}
       
    </ul>
)
}