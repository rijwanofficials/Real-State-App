export const NavbarShimmer = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-[80px] py-[18px] bg-white shadow-sm animate-pulse">
    <div className="h-10 w-32 bg-gray-300 rounded-md"></div> {/* logo placeholder */}
    <ul className="hidden md:flex gap-6">
      {[...Array(6)].map((_, i) => (
        <li key={i} className="h-6 w-16 bg-gray-300 rounded-md"></li>
      ))}
    </ul>
    <div className="hidden md:flex items-center gap-4">
      <div className="h-10 w-28 bg-gray-300 rounded-full"></div> {/* auth button placeholder */}
    </div>
    {/* Mobile menu button placeholder */}
    <div className="md:hidden h-8 w-8 bg-gray-300 rounded"></div>
  </nav>
);

export const HeroShimmer = () => (
  <>
    <div className="relative rounded-3xl h-[480px] bg-gray-300 animate-pulse mx-4 md:mx-20 mt-10 mb-6"></div>
    <div className="h-12 bg-gray-300 rounded-full mx-4 md:mx-20 mb-10 animate-pulse"></div>
  </>
);

export const ServicesShimmer = () => (
  <section className="pt-16 pb-10 px-6 font-poppins bg-white">
    <div className="max-w-[1280px] mx-auto text-center">
      {/* Heading shimmers */}
      <div className="h-10 bg-gray-300 rounded mx-auto mb-3 w-48 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded mx-auto mb-2 w-64 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded mx-auto mb-12 w-56 animate-pulse"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-[260px] sm:h-[280px] bg-gray-300 rounded-xl p-6 animate-pulse"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-400/90 mb-4 mx-auto"></div>
            <div className="h-6 bg-gray-400 rounded mb-3 mx-auto w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded mx-auto w-full"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FeaturedPropertyShimmer = () => (
  <section className="pt-16 pb-10 px-6 bg-white font-poppins">
    {/* Header shimmer */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 max-w-[1280px] mx-auto gap-4 text-center md:text-left">
      <div className="h-10 bg-gray-300 rounded w-64 animate-pulse"></div> {/* Title */}
      <div className="h-10 bg-gray-300 rounded-full w-44 animate-pulse"></div> {/* Button */}
    </div>

    {/* Property Grid shimmer */}
    <div className="max-w-[1280px] mx-auto flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[650px_307px_307px] gap-6">
        {/* Large Image shimmer */}
        <div className="relative h-[300px] lg:h-[430px] bg-gray-300 rounded animate-pulse"></div>

        {/* Medium Image shimmer */}
        <div className="h-[300px] lg:h-[430px] bg-gray-300 rounded animate-pulse"></div>

        {/* Two Small Images shimmer */}
        <div className="h-[300px] lg:h-[430px] grid grid-rows-2 gap-6">
          <div className="w-full h-full bg-gray-300 rounded animate-pulse"></div>
          <div className="w-full h-full bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export const PropertiesSaleShimmer = () => (
  <section className="pt-12 pb-8 px-6">
    <div className="max-w-[1280px] mx-auto animate-pulse">
      {/* Heading & Button */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8 gap-4">
        <div className="h-12 bg-gray-300 rounded w-72 mb-4 md:mb-0"></div> {/* Title */}
        <div className="h-10 bg-gray-300 rounded-full w-52"></div> {/* Button */}
      </div>

      {/* Properties Carousel */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-300 w-[280px] sm:w-[320px] md:w-[350px] h-[470px] sm:h-[500px] flex-shrink-0 flex flex-col overflow-hidden snap-center"
          >
            <div className="w-full h-[200px] sm:h-[220px] bg-gray-400 rounded-t-2xl p-2"></div> {/* Image */}
            <div className="flex flex-col justify-between flex-1 p-4 space-y-4">
              <div className="h-6 bg-gray-400 rounded w-3/4"></div> {/* Property name */}
              <div className="h-4 bg-gray-400 rounded w-full"></div> {/* Location */}
              <div className="h-4 bg-gray-400 rounded w-1/2"></div> {/* Owner */}
              <div className="flex justify-between">
                <div className="h-4 bg-gray-400 rounded w-16"></div> {/* Rating */}
                <div className="h-3 bg-gray-400 rounded w-20"></div> {/* Date */}
              </div>
              <div className="h-12 bg-gray-400 rounded w-full"></div> {/* Description */}
              <div className="flex justify-between items-center">
                <div className="h-10 bg-gray-400 rounded w-24"></div> {/* Button */}
                <div className="h-6 bg-gray-400 rounded w-20"></div> {/* Price */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export const PropertiesRentalShimmer = () => (
  <section className="pt-16 pb-8 px-6">
    <div className="max-w-[1280px] mx-auto animate-pulse">
      {/* Heading & Button */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 gap-6">
        <div className="h-12 bg-gray-300 rounded w-96 mb-4 md:mb-0"></div> {/* Title */}
        <div className="h-10 bg-gray-300 rounded-full w-44"></div> {/* Button */}
      </div>

      {/* Properties Carousel */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-300 w-[280px] sm:w-[300px] md:w-[350px] h-[470px] sm:h-[500px] flex-shrink-0 flex flex-col overflow-hidden snap-center"
          >
            <div className="w-full h-[200px] sm:h-[220px] bg-gray-400 rounded-t-2xl p-2"></div> {/* Image placeholder */}
            <div className="flex flex-col justify-between flex-1 p-4 space-y-4">
              <div className="h-6 bg-gray-400 rounded w-3/4"></div> {/* Property name */}
              <div className="h-4 bg-gray-400 rounded w-full"></div> {/* Location */}
              <div className="h-4 bg-gray-400 rounded w-1/2"></div> {/* Owner */}
              <div className="flex justify-between">
                <div className="h-4 bg-gray-400 rounded w-16"></div> {/* Rating */}
                <div className="h-3 bg-gray-400 rounded w-20"></div> {/* Date */}
              </div>
              <div className="h-12 bg-gray-400 rounded w-full"></div> {/* Description */}
              <div className="flex justify-between items-center">
                <div className="h-10 bg-gray-400 rounded w-24"></div> {/* Button */}
                <div className="h-6 bg-gray-400 rounded w-20"></div> {/* Price */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export const JourneySectionShimmer = () => (
  <section className="pt-16 pb-8 px-6 bg-white">
    <div className="max-w-[1280px] mx-auto animate-pulse">
      {/* Form + Heading Section */}
      <div className="mb-16">
        {/* Heading + Subtext */}
        <div className="text-center md:text-left mb-6 space-y-4 max-w-md mx-auto md:mx-0">
          <div className="h-10 bg-gray-300 rounded w-72"></div> {/* Heading */}
          <div className="h-6 bg-gray-300 rounded w-56"></div> {/* Subtext line 1 */}
        </div>
        
        {/* Form Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 max-w-4xl mx-auto">
          <div className="flex-1 min-w-[180px] h-12 bg-gray-300 rounded-md"></div> {/* Name input */}
          <div className="flex-1 min-w-[180px] h-12 bg-gray-300 rounded-md"></div> {/* Select input */}
          <div className="flex-1 min-w-[180px] h-12 bg-gray-300 rounded-md"></div> {/* Location input */}
          <div className="h-12 w-40 bg-gray-300 rounded-full"></div> {/* Button */}
        </div>
      </div>

      {/* Properties Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1280px] mx-auto">
        {/* Left Side Images */}
        <div className="flex justify-center relative">
          <div className="w-[300px] md:w-[400px] lg:w-[480px] h-[280px] md:h-[360px] lg:h-[430px] bg-gray-300 rounded-lg shadow-md"></div> {/* Main image placeholder */}
          <div className="absolute -bottom-8 -right-6 w-[240px] md:w-[300px] lg:w-[360px] h-[220px] md:h-[270px] lg:h-[320px] bg-gray-300 rounded-lg shadow-md"></div> {/* Secondary image placeholder */}
        </div>

        {/* Right Side Content */}
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="h-7 w-7 rounded-full bg-gray-300 flex-shrink-0"></div> {/* Icon circle */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-6 bg-gray-300 rounded w-48"></div> {/* Title */}
                <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Text */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);


export const ShimmerCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse w-full h-56 flex flex-col">
    <div className="bg-gray-300 h-[56%] w-full"></div>
    <div className="p-5 flex flex-col gap-3">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="flex justify-between items-center mt-auto">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-8 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  </div>
);

export const PaginationShimmer = () => (
  <div className="flex justify-center items-center gap-4 mt-10 px-4 md:px-0">
    {[...Array(7)].map((_, i) => (
      <span
        key={i}
        className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"
      ></span>
    ))}
  </div>
);



export const FooterShimmer = () => (
  <footer className="bg-[#4C5FA4] text-white pt-12 mt-24 pb-16">
    <div className="max-w-[1280px] mx-auto px-6">
      {/* Top Section Shimmer */}
      <div className="text-center mb-10">
        <div className="h-10 bg-gray-300 rounded w-48 mx-auto animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-80 mx-auto mt-4 animate-pulse"></div>
      </div>

      {/* Subscription Form Shimmer */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-lg bg-gray-300 rounded-full overflow-hidden animate-pulse h-12"></div>
      </div>

      {/* Bottom Section Shimmer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-sm gap-6 text-center md:text-left">
        {/* Left Side Logo */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="h-8 w-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-5 w-24 bg-gray-300 rounded animate-pulse"
            ></div>
          ))}
        </div>

        {/* Right Side Copyright */}
        <div className="h-5 w-48 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  </footer>
);



export const LoginSignupShimmer = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 animate-pulse">
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      
      {/* Left Side - Form Shimmer */}
      <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
        <div className="h-12 bg-gray-300 rounded w-48 mb-8"></div> {/* Title */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-300 rounded w-full"></div> // input fields placeholder
        ))}
        <div className="h-12 bg-gray-300 rounded w-full mt-6"></div> {/* button placeholder */}
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 w-10 bg-gray-300 rounded-full"></div> // social icons
          ))}
        </div>
        <div className="h-5 bg-gray-300 rounded w-40 mx-auto mt-6"></div> {/* signup link placeholder */}
      </div>

      {/* Right Side - Image Shimmer */}
      <div className="hidden md:block bg-gray-300 w-full h-full"></div>
    </div>
  </div>
);

 
