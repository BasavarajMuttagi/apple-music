function Footer() {
  return (
    <div className="bg-[#323232] h-fit p-5 text-white text-opacity-85 text-xs space-y-3 pb-20 md:flex flex-row-reverse justify-between items-baseline md:pb-0">
      <div className="md:self-baseline">
        <span className="cursor-pointer">India</span>{" "}
        <span className="text-[#535353]">|</span>{" "}
        <span className="text-[#a1a1a6] cursor-pointer">हिंदी</span>
      </div>
      <div>
        <div className="space-x-2">
          <span className="text-[#a1a1a6]">Copyright © 2024</span>
          <span className="cursor-pointer">Apple Inc.</span>
          <span className="text-[#a1a1a6]">All rights reserved.</span>
        </div>
        <div>
          <ul className="flex space-x-4 flex-wrap space-y-2 items-baseline">
            <li className="cursor-pointer">Internet Service Terms</li>
            <span className="text-[#535353]">|</span>
            <li className="cursor-pointer">Apple Music & Privacy</li>
            <span className="text-[#535353]">|</span>
            <li className="cursor-pointer">Cookie Warning</li>
            <span className="text-[#535353]">|</span>
            <li className="cursor-pointer">Support</li>
            <span className="text-[#535353]">|</span>
            <li className="cursor-pointer">Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
