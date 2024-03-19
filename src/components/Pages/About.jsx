import React from "react";
export const About = () => {
  return (
    <div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-3">
            Welcome to ECHOSPARK SOLUTIONS! We are a team of passionate and
            experienced IT consultants dedicated to helping businesses like
            yours achieve their technology goals.
          </p>
          <h1 className="md:text-3xl sm:text-3xl text-5xl font-bold md:py-3">
            Our Story.
          </h1>
          <div className="flex justify-center items-center ">
            <p className="md:text-2xl sm:text-2xl font-bold text-xl py-4">
              Briefly describe the origin story of your IT consulting company.
              When was it founded? What inspired the founders? Mention any key
              milestones or achievements.
            </p>
          </div>
          <p className="md-:text-2xl text-xl font-bold text-gray-500">
            Our Mission: Clearly state your company's mission. What problem do
            you solve for your clients? What impact do you strive to make?
          </p>
          <p>
            Our Values [Value 1]: [Explain what this value means to your company
            and how it guides your work.] [Value 2]: [Explain what this value
            means to your company and how it guides your work.] [Value 3]:
            [Explain what this value means to your company and how it guides
            your work.] (You can add more values if relevant)
          </p>
          <p>
            Why Choose Us? Expertise: Our team boasts [number] years of combined
            experience in various IT domains. We stay up-to-date on the latest
            technologies to deliver cutting-edge solutions. Client-Centric
            Approach: We prioritize understanding your unique business needs and
            challenges. We collaborate closely with you to develop tailored
            solutions that optimize your IT infrastructure and support your
            growth. Proven Track Record: We have a history of successful
            projects, delivering measurable results that empower our clients to
            achieve their strategic objectives. Reliable Partnership: We are
            committed to building long-term partnerships with our clients. You
            can count on us for ongoing support, maintenance, and guidance as
            your technology needs evolve
          </p>
          <p>
            Meet Our Team [ Consider including a section with brief bios and
            photos of your key team members, highlighting their expertise and
            experience. ] Ready to Take Your IT to the Next Level? Contact us
            today for a free consultation to discuss your specific requirements
            and see how we can help you leverage technology to achieve your
            business goals.
          </p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>

        </div>
      </div>
    </div>
  );
};

export default About;
