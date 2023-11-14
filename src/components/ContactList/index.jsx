import { ContactElement } from "components/ContactElement"
export const ContactList = ({array}) => {
return (

    <ul>
       {array.map((el) => (
        <ContactElement key={el.id} name = {el.name} phone = {el.phone}/>
       ))}
       
    </ul>
)
}