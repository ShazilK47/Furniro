import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-full h-[505px] flex flex-col justify-between p-8 ">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Funiro Info */}
        <div>
          <h2 className="font-bold text-[24px]">Funiro.</h2>
          <address className="not-italic text-sm text-gray-500 mt-4">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div className="">
          <h3 className="font-semibold text-sm mb-10">Links</h3>
          <ul className="space-y-2 text-sm text-gray-600 flex flex-col gap-10">
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-10">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600 flex flex-col gap-10">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4">Newsletter</h3>
          <div className="flex items-center  gap-4    overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow p-2 text-sm border-b-2 border-black text-gray-600 outline-none"
            />
            <button className=" border-b-2 border-black text-black px-4 py-2 text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 pt-4 ">
        <p className="text-sm text-gray-500">
          2024 Funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
