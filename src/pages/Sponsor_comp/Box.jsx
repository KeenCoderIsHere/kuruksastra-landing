import Image from "next/image";

export default function SponsorBox({ src, alt }) {
  return (
    <div className="w-[290px] h-[161px] border-2 border-[#756C1A] flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt || "sponsor"}
        width={200}
        height={100}
        className="object-contain max-w-[80%] max-h-[80%]"
      />
    </div>
  );
}
