import { Phone,Clock,MapPin } from "lucide-react";
export default function Home() {
  return(
    <main>
      <div className="flex flex-col w-full h-screen justify-center items-center space-y-4 ">
        <p className="text-7xl font-bold font-serif">
          Computer Repair Shop
        </p>
        <p className="mt-3  text-3xl font-extralight">
        Reliable Computer Repair & IT Support Services
        </p>
        <div className=" mt-6 text-3xl font-extralight flex flex-col gap-3">
          <p className="flex items-center justify-between gap-3">< MapPin className="w-7 h-7"/>  Main Street,India</p>
          <p className="flex items-center justify-between"><Phone className="w-7 h-7"/>+91 123456789</p>

        </div>
        <p className=" mt-6 text-3xl font-extralight  flex items-center justify-between gap-3"><Clock className="w-7 h-7 "/>Open Everyday- Mon to Sat, 10 AM-8 PM</p>

      </div>
    </main>
  );
}
