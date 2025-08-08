export const FeaturedPostCard = () => {
  return (
    <div className="flex items-center bg-gray-500 justify-center relative mb-10">
      <div className="w-full relative">
        <div className="w-full h-[400px] bg-gray-500/20 rounded-lg overflow-visible relative my-5 ">
          {/* Overlapping image */}
          <div className=" hover:shadow-2xl hover:shadow-gray-300">
            <div className="absolute bottom-[-60px] left-10 w-1/2 z-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMHRvZ2V0aGVyfGVufDB8fDB8fHww"
                alt="Featured Blog"
                className="w-full h-[400px] object-fill  rounded-tl-3xl rounded-br-3xl shadow-xl"
              />
            </div>

            {/* Content section */}
            <div className="flex w-full absolute top-10 items-center hover:shadow-3xl transition-shadow shadow-slate-200 duration-300 p-3 gap-6 pl-[55%]">
              <div className="text-white space-y-4">
                <div className="text-xs font-medium text-gray-100 tracking-wide uppercase">
                  Featured Post
                </div>
                <h2 className="text-3xl font-bold leading-tight">
                  Deliver 200% better quality customer feedback with AI-powered
                  conversations
                </h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  AI is fundamentally transforming how organizations understand
                  and engage with customers. Industry analysts project this
                  shift could unlock nearly $1 trillion in value...
                </p>
                <div className="text-xs font-medium text-white/70 tracking-wide uppercase mt-4">
                  By Brad Anderson
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
