import React,{useState} from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const phoneHandler = (event) => {
        setPhone(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const clientData = {
            name: name,
            email: email,
            phone: phone
        }

        console.log(clientData);

        setName('');
        setEmail('');
        setPhone('');

        const response = await fetch('https://ecommerce-website-3d5e2-default-rtdb.firebaseio.com/contact.json',{
            method: 'POST',
            body: JSON.stringify(clientData),
            headers: {
                'COntent-Type': 'application/json'
            }
        });        
        const data = await response.json();
        console.log(data);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={name} onChange={nameHandler}/>
            </div>
            <div>
                <label htmlFor='email'>Email Id</label>
                <input type='email' id='email' value={email} onChange={emailHandler}/>
            </div>
            <div>
                <label htmlFor='phone'>Phone Number</label>
                <input type='number' max='9999999999' min='1000000000' id='phone' value={phone} onChange={phoneHandler}/>
            </div>
            <button >Submit</button>
        </form>
    );
};

export default ContactUs;