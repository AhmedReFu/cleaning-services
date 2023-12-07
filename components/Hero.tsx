"use client";
import { Button } from "@components";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Your Personal Assistant</h1>
        <p className="hero__subtitle">
          One-stop solution for your services. Order any service, anytime.
        </p>

        <Button
          title="Explore Service"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/HomeCleaning.png"
            alt="Home Cleaning"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay rounded-md"></div>
      </div>
    </div>
  );
};

export default Hero;
