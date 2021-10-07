import React from 'react';

export default function Email({emails}) {
  
    return (
        <div>
            <p>
                {emails[0].sender}
            </p>
            <p>
                {emails[0].recipient}
            </p>
            <p>
                {emails[0].subject}
            </p>
            <p>
                {emails[0].date}
            </p>
            <p>
                {emails[0].message}
            </p>
        </div>

    )
}
/*      "sender": "katie@galvanize.com",
"recipient": "jane@galvanize.com" ,
"subject": "Standup meeting",
"message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
  proud to say that they were perfectly normal, thank you very much.",
"date": "2020-08-23T18:25:43.511Z",*/