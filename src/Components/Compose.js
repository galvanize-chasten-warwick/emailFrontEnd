import React from 'react';
import './Compose.css';

export default function Compose({emails}) {
    let inputField = 
    {   emailComp: '',
        subjectComp: '',
        messageComp: ''
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        inputField.emailComp = event.target.compose_email.value;
        inputField.subjectComp = event.target.compose_subject.value;
        inputField.messageComp = event.target.message.value;
        console.log(inputField);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('http://localhost:3001/emails/send', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }
        //console.log(event.target.elements.compose_email.value) // from elements property
        //console.log(event.target.compose_subject.value)          // or directly


    return (
        <div>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className="to-email">
                    To: <input type='email' name='compose_email' placeholder='Recipient Email' />
                </div>
                <div className="subject-email">
                    Subject: <input type='text' name='compose_subject' placeholder='Subject' />
                </div>
                <div className="message-email">
                    Message: <br/>
                    <textarea name='message' placeholder='Message' />
                </div>
                <div className="send">
                    <input type='submit' value='Send' />
                </div>
            </form>
        </div>

    )

}
/* POST /send:

  {
    "sender": String,
    "recipient": String,
    "subject": String,
    "message": String,
    "date": Date,
    "id": Number
  }*/