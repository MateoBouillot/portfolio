import { useRef, useState } from 'react'
import './Form.scss'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'

function Form() {
    const form = useRef()
    const { language } = useSelector((state) => state.lang)
    const [sucsess, setSucsess] = useState(null)

    let sucsessmsg = language == 'fr'? 'Votre message a été envoyé!' : 'Your message has been sent!'
    let errormsg = language == 'fr'? 'Champs invalide ou manquant!' : 'Invalid or missing fields!'
    let style = sucsess == false? { color: 'red' } : { color: 'white' }

    const sendmail = (e) => {
        e.preventDefault()

        if (form.current.user_name.value !== '') {
            if (form.current.message.value !== '') {
                emailjs
             .sendForm('service_slwwpjb', 'template_0humo89', form.current, {
                 publicKey: 'qqQU2UG6XpuG59utO',
             })
             .then(
                 () => {
                     setSucsess(true)
                 },
                 (error) => {
                    console.log(error)
                 }
            )
            } else {
                setSucsess(false)
            }
        } else {
            setSucsess(false)
        }
        
    }

    return <div className='outer' id='contact' >
    <form ref={form} onSubmit={sendmail} className='form'>
        <div className='form__inputs'>
            <label className='form__inputs__label'>{language == 'fr'? 'Nom' : 'Name' }</label>
            <input type="text" name="user_name" className='form__inputs__input' />
            <label className='form__inputs__label'>Email</label>
            <input type="email" name="user_email" className='form__inputs__input' />
        </div>
        <div className='form__text'>
            <label className='form__text__label'>Message</label>
            <textarea name="message" className='form__text__textarea'/>
        </div>
        <h4 className='sucsess' style={style} >{ sucsess === true? sucsessmsg : sucsess === false? errormsg : '' }</h4>
        <input type="submit" value="Send" className='form__btn'/>
    </form>
    </div>
}

export default Form