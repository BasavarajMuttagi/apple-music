function Footer() {
  return (
    <div className="bg-[#323232] h-fit p-5 text-white text-opacity-85 text-xs space-y-3 md:flex flex-row-reverse justify-between items-baseline">
      <div className="md:self-baseline">
        <span className="">India</span>{" "}
        <span className="text-[#535353]">|</span>{" "}
        <span className="text-[#a1a1a6]">हिंदी</span>
      </div>
      <div>
        <div className="space-x-2">
          <span className="text-[#a1a1a6]">Copyright © 2024</span>
          <span>Apple Inc.</span>
          <span className="text-[#a1a1a6]">All rights reserved.</span>
        </div>
        <div>
          <ul className="flex space-x-4 flex-wrap space-y-2 items-baseline">
            <li>Internet Service Terms</li>
            <span className="text-[#535353]">|</span>
            <li>Apple Music & Privacy</li>
            <span className="text-[#535353]">|</span>
            <li>Cookie Warning</li>
            <span className="text-[#535353]">|</span>
            <li>Support</li>
            <span className="text-[#535353]">|</span>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
