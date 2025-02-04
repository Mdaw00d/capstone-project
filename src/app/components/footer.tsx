import Image from "next/image";

export default Footer;

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 mt-28">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center">
          <h2 className="text-4xl font-semibold mb-4">AuraLine</h2>
          <h3 className="font-medium">Contact Us</h3>
          <br />
          <h4 className="font-bold">Whatsapp</h4>
          <div className="">
            <div className="">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyxJREFUSEvFlU1oFGcYx//PjOvObLrzPqMXtVlKSxsqFvxC20uLCI0thV76AQ0UGqSCtVFEyEEvFvQgeqnWIgihQj0I6SFQpN+llkJbGvQSLUIUPw6SZjPvZLMzk2R3nuZtNhKTna2XkDnO/N/nN8/H/3kJS/zQEsfH8gOqWm+1gXcFeAVAB4A6Ab+lwB8i8m2b719tVYXMDKJyuUS2fR7ALgAVACbQDSFKSGSzABsJUAScyit1hIimmoGaApLx8Q4R+RkieRAddDzvSyKShQGSMOwRkVMAbln1+tv51auHFmoWASYmJtbYtdpfjVLsdJiHW5VgcmzshdSyBgBYThRtoHXrovn6RYBY68sAtgPY5jLfjkZHn7RXrizmPe/vLFADMgigz2XemwmIx8ZehmVdgchu1/f7JiuV9Wm9brL5x1Hq6WZlmgsWa30YwHECOh3m7+feP5JBFARniKjbUconoulI614CThgxAbsc5u+yspB799ykWKwQMOAwv9UcoPU1EN0tKPWmESRh+JGInP1PLNLt+v4XrfoRmfMACsybmgJire/P1P+yy7zHCKrV6lprevo2gMBRqkREtVaAWOtzALpcZi8LcBPAoMv83pygMYqnBfjcVerjVn1ItD4hwAGX2ckCfAPAd5lfnP+nsdaXYNxMNIBarcfK5QqSpqZcfZNAPzMHRt/QbXGZn8sCHAPQW7Pt9mKxODInEhE71vpTItoHYHy25yg2mn/SYe4VEWsyDEcF+Mpl/rApINH6GQGGIfKJ6/tHFzlX61cFOA3g+ca3lIDXzFjGYdgFkYsLp22R0cwkWEDdYd6a1dCq1lssEQ9Ed4wZ4yB4CkR/ml3lMu/INJo8eNCWOE5ARGccpQ61mpiHBpsN/gMAT9J0W2HVqruZgCQM3xCRr0H0PoAUQCeJ/J6vVC5QqRTPPxiVy+20YsUHENlvXGLV6zv/d9lFQfBZo5GzsYiGIPIsgCkR+QWA8YQQkdlVLzU0v5JId9ZSfKQHsdZmhwzPXC4/1SzrR8/zyjIy8kSSy70DotcBmPH1Z0b2OgFXUqL+glKm9pnP8l+Zj9PoZc3gXyN3TijYsfVVAAAAAElFTkSuQmCC"
                alt="WhatsApp"
                width={20}
                height={20}
                className="-mt-5"
              />

              <span>+1 202-918-2132</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Most Popular Categories */}
        <div className="mb-6 md:mb-0 text-center">
          <h3 className="text-lg font-semibold border-b-2 border-white inline-block pb-1 mb-4">
            Most Popular Categories
          </h3>
          <ul className="space-y-2 text-center">
            <li>Clothing</li>
            <li>Makeup</li>
            <li>Personal Care</li>
            <li>Jewellery</li>
            <li>Perfumes</li>
            <li>Shirts</li>
            <li>Pants</li>
          </ul>
        </div>

        {/* Right Section: Customer Services */}
        <div className="text-center">
          <h3 className="text-lg font-semibold border-b-2 border-white inline-block pb-1 mb-4">
            Customer Services
          </h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center">
        <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  );
}
