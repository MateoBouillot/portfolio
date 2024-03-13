import { useRef } from 'react'
import './Form.scss'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'

function Form() {
    const form = useRef()
    const { language } = useSelector((state) => state.lang)

    const sendmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_slwwpjb', 'template_0humo89', form.current, {
                publicKey: 'qqQU2UG6XpuG59utO',
            })
            .then(
                () => {
                    console.log('sucsess')
                },
                (error) => {
                    console.log('fail', error.text)
                }
            )
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
        <input type="submit" value="Send" className='form__btn'/>
    </form>
    </div>
}

export default Form