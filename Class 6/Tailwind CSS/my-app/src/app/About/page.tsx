
import pic1 from "../Image/imageWebsite.5c6ae62f.jpg"
import pic2 from "../Image/imageWebsite2.a102c7b5.jpg"
import pic3 from "../Image/imageWebsite3.b845fe78.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%]">
        <h1 className="font-bold text-[1.6rem] text-center   text-sky-800 mt-16">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="mt-10">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>

        <div className="flex gap-12 mt-11">
            <Image src={pic1} alt="" width={340} className="rounded-lg shadow-2xl shadow-gray-900"/>
            <Image src={pic2} alt="" width={340} className="rounded-lg shadow-2xl shadow-gray-900"/>
            <Image src={pic3} alt="" width={340} className="rounded-lg shadow-2xl shadow-gray-900"/>
        </div>
      </div>
    </div>
  );
};

export default About;
