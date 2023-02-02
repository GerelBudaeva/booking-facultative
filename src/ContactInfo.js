import React from 'react';

const ContactInfo = () => {

    const infoCompany =
        {
            name: 'Booking Incorporation',
            address:
                {
                    city: 'LA',
                    street: 'Las villas',
                    building: 6
                },
            phone: '253-256-34-56',
            email: 'qwe@booking.com',
        }


    return (
        <div>
            <h3>{infoCompany.name} : </h3>
            {infoCompany.address.city},  {infoCompany.address.street},  {infoCompany.address.building}
            <hr/>
           <div>
            <strong>Our contacts:</strong>
            <br/>
            tel. {infoCompany.phone}
            <br/>
            email: {infoCompany.email}
           </div>
        </div>
    );
};

export default ContactInfo;
