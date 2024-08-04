import React, { useState, useRef} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const BookingForm = () => {
  const bookingformRef = useRef();
  const { onRemove, setShowCart, selectedRoomType, selectedProduct } = useStateContext();
  const [formData, setFormData] = useState({
      resort_name: selectedProduct,
      room_type: selectedRoomType,
      user_email: '',
      user_name: '',
      message: '',
      transfer: 'Speed Boat',
      meal_plan: 'Bed & Breakfast',
      
  });

   const [startDate, setStartDate] = useState(null);
   const [depDate, setDepDate] = useState(null);
  
    const handleDateChange = (date) => {
      setStartDate(date)

    };
    const handleDateDepChange = (date) => {
      setDepDate(date)

    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  //// This function only send email with emailJS.
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm('service_i57zmwi', 'template_nasy5hg', form.current, {
  //       publicKey: 'dyANHsZUgz4dPekOa',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };


  const sendEmailResend = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('start date:', startDate);
    const mail_data = {
      resort_name: formData.resort_name,
      room_type: formData.room_type,
      user_email: formData.user_email,
      user_name: formData.user_name,
      message: formData.message,
      transfer: formData.transfer,
      meal_plan: formData.meal_plan,
      arrival_date: startDate.toString().slice(0, 10),
      departure_date: depDate.toString().slice(0, 10),
    }

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail_data),
      
    })
      .then(response => response.json())
      .then(json => {
        toast.success('Booking Request Successfully Sent!!')
        setShowCart(false)

      })
      .catch(error => {
        toast.error("Something went wrong!!")
      });

  };
  



  return (
    <div className="cart-wrapper" ref={bookingformRef}>
      
      <div className="cart-container overflow-auto shadow-xl mb-4">
        <button
        type="button"
        className="cart-heading mb-4"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Booking Request</span>
        </button>

 
        <form onSubmit={sendEmailResend}>    
          <section className="text-gray-600 body-font relative">
            <div>
            <span className="ml-10 text-gotPrimary font-bold"> Destination:</span> <span className=' text-gotPrimary font-bold'>{selectedProduct}</span>
            </div>
            <div className="mb-2">
            <span className="ml-10  text-gotPrimary font-bold"> Room Type:</span> <span className=' text-gotPrimary font-bold'>{selectedRoomType}</span>
            </div>
          

            <div className='mx-10'>
                {/* <div className="mb-4">
                  <label htmlFor="resort_name_label" className="leading-7 text-sm text-gray-600">Booking Destination</label>
                  <input type="text"  id="resort_name" 
                  name="resort_name" disabled 
                  value={selectedProduct}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  
                </div> */}
                <div className="mb-2">
                  <label htmlFor="arrival_date_label" className="leading-7 text-sm text-gray-600">Arrival Date</label>
                    <div className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MMMM/yyyy"
                      placeholderText="Arrival Date"
                      required
                      name="arrival_date"/>
                    </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="arrival_date_label" className="leading-7 text-sm text-gray-600">Departure Date</label>
                    <div className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <DatePicker
                      selected={depDate}
                      onChange={handleDateDepChange}
                      dateFormat="dd/MMMM/yyyy"
                      placeholderText="Depature Date"
                      required
                      name="departure_date"/>
                    </div>
                </div>
                
                {/* <div className="mb-2">
                  <label htmlFor="room_type_label" className="leading-7 text-sm text-gray-600">Room Type</label>
                  <input type="text" 
                  id="room_type" 
                  name="room_type" 
                  disabled 
                  value={selectedRoomType} 
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  
                </div> */}
                <div className="mb-2">
                <label htmlFor="meal_plan_label" className="leading-7 text-sm text-gray-600">Meal Plan</label>
                  <select name="meal_plan" id="meal_plan" 
                  onChange={handleChange} 
                  value={formData.value}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option value="Bed & Breakfast">Bed & Breakfast</option>
                      <option value="Half_Board">Half Board</option>
                      <option value="Full_Bord">Full Board</option>
                      <option value="All Inclusive">All Inclusives</option>
                      
                  </select>
                </div>
                <div className="mb-2">
                <label htmlFor="transfer_label"  className="leading-7 text-sm text-gray-600">Transfer Type</label>
                  <select name="transfer" onChange={handleChange} id="transfer" 
                  value={formData.value}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">  
                      <option value="Speed Boat">Speed Boat</option>
                      <option value="Seaplane">Seaplane</option>
                      <option value="Ferry">Ferry</option>
                      <option value="Doemstic">Domestic Flight</option>
                  </select>
                </div>


                <div className="mb-2">
                  <label htmlFor="email_label" className="leading-7 text-sm text-gray-600">Your Email</label>
                  <input type="email" onChange={handleChange} required value={formData.value} id="user_email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="mb-2">
                  <label htmlFor="user_name_label" className="leading-7 text-sm text-gray-600">Your Name</label>
                  <input type="text" id="user_name" required onChange={handleChange} value={formData.value} name="user_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="mb-2">
                  <label htmlFor="message_label" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" onChange={handleChange}  value={formData.value} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button type='submit' className="text-white bg-gotPrimary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Request</button>
                <button className="py-2 px-6 ml-5 ring-1 hover:bg-slate-300 text-lg rounded" onClick={() => setShowCart(false)}>Cancel</button>
              </div>
            
          </section>
        </form>

        
      </div>
    </div>
  )
}

export default BookingForm