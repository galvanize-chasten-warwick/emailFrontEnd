import React from 'react';

export default function EmailList({emails}) {
  
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
                    <ul className="nav nav-pills flex-column mb-auto">
                        {emails.map((item) =>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    {item.sender} {item.subject}
                                </a>
                            </li>
                        )}
                    </ul>
            </div>
            <ul>

            </ul>
        </div>

    )
}
