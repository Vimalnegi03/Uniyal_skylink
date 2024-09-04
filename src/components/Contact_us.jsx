import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    aadhaar: '',
    phone: '',
    address: '',
    photoUrl: '',
    message:'' // Store the photo URL here
  });
  const [photoFile, setPhotoFile] = useState(null); // Store the file

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setPhotoFile(files[0]); // Set the photo file
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const { name, email, aadhaar, phone } = formData;

    // Name validation: should be at least 3 characters
    if (name.length < 3) {
      toast.error('Name should be at least 3 characters long.');
      return false;
    }

    // Email validation: simple regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    // Aadhaar validation: should be exactly 12 digits
    const aadhaarRegex = /^\d{12}$/;
    if (!aadhaarRegex.test(aadhaar)) {
      toast.error('Aadhaar card number should be exactly 12 digits.');
      return false;
    }

    // Phone number validation: should be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Phone number should be exactly 10 digits.');
      return false;
    }

    return true;
  };

  const handleUpload = async () => {
    if (photoFile) {
      const formData = new FormData();
      formData.append('file', photoFile);
      formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET); // Replace with your Cloudinary upload preset

      try {
        const response = await axios.post(
          import.meta.env.VITE_UPLOAD_CLOUDINARY_NAME,
          formData
        );
        return response.data.secure_url; // Return the secure URL of the uploaded image
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Error uploading image.');
        return null;
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submitting
    if (!validateForm()) return;

    // Upload the photo to Cloudinary
    const photoUrl = await handleUpload();

    if (photoUrl) {
      // Set the photo URL in the form data
      setFormData((prevData) => ({
        ...prevData,
        photoUrl,
      }));

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        { ...formData, photoUrl }, // Send form data including the photo URL
        import.meta.env.VITE_EMAILJS_USER_ID     // Replace with your EmailJS user ID
      ).then((result) => {
          toast.success('Email sent successfully!');
          console.log('EmailJS Result:', result);
      }).catch((error) => {
          toast.error(`Error sending email: ${error.text}`);
          console.error('EmailJS Error:', error);
      });
    } else {
      toast.error('Failed to upload the photo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="form-control">
              <label className="label text-gray-700 font-bold" htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 font-bold" htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="form-control">
              <label className="label text-gray-700 font-bold" htmlFor="aadhaar">Aadhaar Card:</label>
              <input
                type="text"
                name="aadhaar"
                id="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 font-bold" htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control mb-6">
            <label className="label text-gray-700 font-bold" htmlFor="photo">Photo:</label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleChange}
              className="file-input w-full"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label text-gray-700 font-bold" htmlFor="address">Address:</label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label text-gray-700 font-bold" htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full btn-lg">
            Send Message
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;
