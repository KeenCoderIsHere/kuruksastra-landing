import Image from "next/image";

export default function CustBox({ wid, hei, src }) {
  return (
    <div
      className="border-2 border-[#756C1A] flex items-center justify-center overflow-hidden"
      style={{ width: wid, height: hei }}
    >
      <Image
        src={src}
        alt="sponsor"
        width={wid * 0.7}
        height={hei * 0.7}
        className="object-contain max-w-[80%] max-h-[80%]"
      />
    </div>
  );
}
