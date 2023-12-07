"use client";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  links: string;
}

const ServiceCard = ({ title, links }: ServiceCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:shadow-md">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={links}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md
"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{title}</p>
      </div>

      {/* Price */}
    </div>
  );
};

export default ServiceCard;
