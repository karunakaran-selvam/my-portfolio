const Services = () => {
  return (
    <div id="services" className="bg-white min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0a66c2]">
          My Services
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#0a66c2] font-extrabold text-[32px] mb-4">
              Web UI/UX Design

            </h1>
            <p className="text-lg text-gray-700 mb-4">
              I have created UI/UX rich websites that are convenient and interactive for users. I have also designed clean, modern, and responsive multi-theme layouts.
            </p>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#0a66c2] font-extrabold text-[32px] mb-4">
              Web Backend
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              I specialize in building secure web applications APIs, third-party integrations, Microservices ,and databases. I have a strong experience in authentication such as JWT and OAuth.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#0a66c2] font-extrabold text-[32px] mb-4">
              Mobile App Development
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              I have expertise in designing scalable and maintainable system architecture that includes necessary components and services such as databases, APIs, web servers, and caching systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
