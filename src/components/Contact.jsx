

const Contact = () => {
    return (
        <div className="lg:px-12 px-4">
            <div className="text-headingColor text-center mb-20">
                <p className="text-xl font-semibold mb-5">Get in Touch</p>
                <h2 className="md:text-5xl text-4xl font-bold">My Experience</h2>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora iste eligendi.</p>
            </div>
            {/* forms here */}
            <div className="md:w-2/3 mx-auto mb-20">
                <form>
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="fName" className="text-base text-headingColor w-full">First name</label>
                            <input type="text" id="fName" name="fName" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="LName" className="text-base text-headingColor w-full">Last name</label>
                            <input type="text" id="LName" name="LName" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                    </div> 
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="email" className="text-base text-headingColor w-full">Email</label>
                            <input type="text" id="email" name="email" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="phone" className="text-base text-headingColor w-full">Phone Number</label>
                            <input type="text" id="phone" name="phone" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                    </div>
                    {/* Input selection */}
                    <div className="w-full mb-8">
                        <label htmlFor="option" className="text-base text-headingColor w-full">Choose a topic</label>
                        <select name="options" id="options" className="block border border-primary rounded-lg py-2 mt-2 w-full px-2">
                            <option value="0">Select one...</option>
                            <option value="1">Inquires</option>
                            <option value="2">Reach out</option>
                            <option value="3">Questions</option>
                        </select>
                    </div>
                    {/* Text area */}
                    <div className="w-full mb-8">
                        <label htmlFor="option" className="text-base text-headingColor w-full">Message</label>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Type your message" 
                        className="block border border-primary rounded-lg py-2 mt-2 w-full px-2"></textarea>
                    </div>
                    {/* accepting terms */}
                    <div>
                        <input type="checkbox" name="agree" id="agree"/>
                        <label htmlFor="agree" className="text-base text-headingColor w-full ml-3
                        items-centers">I accept the terms</label>
                    </div>  

                    {/* btn submit */}
                    <div className="w-36 mx-auto mt-8">
                        <input type="submit" value="Submit" className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact; 