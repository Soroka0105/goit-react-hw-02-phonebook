import css from "./contactElement.module.css"

export const ContactElement = ({elm, deleteContact}) => {
    return (
        <li className={css.item}>
            
<p className={css.elm}>{elm.name}</p>
<p className={css.elm}>{elm.phone}</p>
<button type="button" onClick={() => deleteContact(elm.id)}>Delete</button>
        
        </li>
    )
}