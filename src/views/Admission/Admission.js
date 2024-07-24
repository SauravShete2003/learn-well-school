import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
function Admission() {
  return (
    <div>
        <Navbar />
      <div class="shadow-md shadow-gray-700 p-2 my-4 mx-auto w-2/4">
        <h1 className='font-semibold text-2xl text-center'>LearnWell School Admission Form</h1>
        <form className='p-3'>
            <div class="form-group">
                <label for="student-name" className='font-semibold'>Student Name </label>
                <input type="text" name="student-name" required className='w-2/4 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="date-of-birth"  className='font-semibold p-1'>Date of Birth</label>
                <input type="date" name="date-of-birth" required className='w-1/3 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="grade" className='font-semibold' >Grade Applying For</label>
                <select  name="grade" required className='w-2/4 outline-none p-1'>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="senior-secondary">Senior Secondary</option>
                </select>
            </div><br/>
            <div class="form-group">
                <label for="parent-name"  className='font-semibold'>Parent/Guardian Name</label>
                <input type="text" name="parent-name" required className='w-2/4 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="contact-number"  className='font-semibold'>Contact Number</label>
                <input type="tel" name="contact-number" required className='w-2/4 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="email"  className='font-semibold'>Email Address</label>
                <input type="email" name="email" required className='w-2/4 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="address"  className='font-semibold'>Home Address</label>
                <textarea name="address" rows="4" required className='w-2/4 outline-none'></textarea>
            </div><br/>
            <div class="form-group">
                <label for="previous-academics"  className='font-semibold'>Previous Academic Records</label>
                <input type="file"  name="previous-academics" accept=".pdf,.doc,.docx" required className='w-2/4 outline-none'/>
            </div><br/>
            <div class="form-group">
                <label for="birth-certificate" className='font-semibold'>Birth Certificate</label>
                <input type="file"  name="birth-certificate" accept=".pdf,.doc,.docx" required className='w-2/4 outline-none'/>
            </div><br/>
            <button type="button" className='py-2 px-3 block mx-auto bg-white rounded-md font-semibold'>Submit Application</button>
        </form>
    </div>
    </div>
  )
}

export default Admission
