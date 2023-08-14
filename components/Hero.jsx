import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-center bg-cover hero-img relative z-[2] overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/75" />
      <div className="flex items-center justify-start w-full z-[5] bg-linear min-h-screen">
        <div className="container mx-auto px-8">
          <div className="w-full md:max-w-4xl flex flex-col gap-10">
            <h1 className="text-5xl md:text-7xl leading-[3rem] md:leading-[5rem]">
              Unleash Your Potential Learn with Us Anytime Anywhere!
            </h1>
            <p className="text-2xl text-gray-500">
              Welcome to our cutting-edge Online Course Platform, your gateway
              to a world of knowledge and growth. Explore an extensive range of
              meticulously crafted courses, designed to empower you with
              valuable skills and insights.
            </p>
            <Button
              href={``}
              placeholder="Get Started"
              className="hover:text-yellow-200 transition-colors"
              size={"heroBtn"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero