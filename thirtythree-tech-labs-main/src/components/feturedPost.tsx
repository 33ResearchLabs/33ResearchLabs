export const FeaturedPostCard = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center relative mb-10">
          <div className="w-full relative  mx-auto px-4">
            <div className="w-full h-[400px] bg-white border border-gray-200 rounded-lg overflow-visible relative shadow-sm">
              {/* Overlapping Image */}
              <div className="absolute bottom-[-60px] left-10 w-1/2 z-10">
                <img
                  src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?fm=jpg&q=60&w=3000"
                  alt="Featured Blog"
                  className="w-full h-[400px] object-cover rounded-tl-3xl rounded-br-3xl shadow-xl border"
                />
              </div>

              {/* Content section */}
              <div className="flex w-full absolute top-10 items-center transition-shadow duration-300 p-6 gap-6 pl-[55%]">
                <div className="space-y-4">
                  <div className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    Featured Post
                  </div>
                  <h2 className="text-3xl font-extrabold text-black leading-snug">
                    Revolutionize Customer Feedback with 200% More Insights Using AI-Powered Conversations
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    AI is no longer just a buzzword—it’s the driving force behind how modern businesses gather and act on customer feedback. By leveraging AI-powered chatbots and conversation analysis tools, organizations are now capturing deeper, more actionable insights in real-time.

                    From understanding sentiment to identifying unmet customer needs, this new approach goes beyond surveys and spreadsheets—turning every interaction into a valuable data point. Industry experts predict this shift will generate over $1 trillion in value over the next decade.
                  </p>
                  <div className="text-xs font-medium text-gray-500 uppercase mt-4">
                    By Brad Anderson
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden p-4 bg-white rounded-lg border border-gray-200 shadow-sm max-w-3xl mx-auto">
        <img
          src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?fm=jpg&q=60&w=3000"
          alt="Featured Blog"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <div className="text-blue-600 text-xs font-medium uppercase mb-1">
          Featured Post
        </div>
        <h2 className="text-xl font-bold text-black mb-2 leading-snug">
          Deliver 200% better quality customer feedback with AI-powered conversations
        </h2>
        <p className="text-gray-700 text-sm mb-3">
          AI is fundamentally transforming how organizations understand and engage with customers...
        </p>
        <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
          By Brad Anderson
        </div>
      </div>
    </>
  );
};
