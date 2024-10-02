import { IconBaseProps } from "react-icons";
import {
  RiComputerLine,
  RiSmartphoneLine,
  RiPaletteLine,
  RiSpeedLine,
  RiCustomerServiceLine,
} from "react-icons/ri";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Crafting visually stunning and user-friendly websites that leave a lasting impression.",
    icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring flawless functionality across all devices, from desktops to smartphones.",
    icon: RiSmartphoneLine,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing interfaces that enhance user experience.",
    icon: RiPaletteLine,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed and performance, ensuring fast load times and smooth interactions.",
    icon: RiSpeedLine,
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#E6E6E1] text-[#E6E6E1] flex items-center justify-center p-4"
    >
      <div
        id="services-box"
        className="w-full max-w-[96%] min-h-[96vh] bg-[#1C1C1A] rounded-[20px] sm:rounded-[35px] p-4 sm:p-8 overflow-auto flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Services
            <span className="font-extralight">
              <RiCustomerServiceLine className="inline-block" />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-center sm:text-start mb-6 sm:mb-8 text-[#e6e6e16d]">
            what i do for you...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#2A2A27] rounded-lg overflow-hidden p-4 sm:p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6E6E1] flex items-center justify-center mr-3 sm:mr-4">
                    <service.icon
                      className="text-xl sm:text-2xl text-[#1C1C1A]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-[#e6e6e16d]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
