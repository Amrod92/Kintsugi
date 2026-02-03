import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Welcome to Kintsugi
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Embrace the beauty of imperfection with Kintsugi, the art of
              repairing broken pottery with gold.
            </p>
            <Link
              href="/get-start  ed"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn More
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/kintsugi-hero.png"
              alt="Kintsugi Illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-3xl mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              Discover the Philosophy of Kintsugi
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Kintsugi is more than just a repair technique; it&apos;s a
              philosophy that teaches us to embrace our flaws and see the beauty
              in imperfection. Learn how this ancient art form can inspire you
              to find strength and resilience in your own life.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                History of Kintsugi
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Explore the rich history of Kintsugi, from its origins in Japan
                to its influence on modern art and design.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Techniques & Materials
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Learn about the traditional techniques and materials used in
                Kintsugi, including lacquer, gold powder, and more.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Modern Applications
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Discover how Kintsugi is being applied in contemporary art,
                design, and even personal growth practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              What Our Users Say
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Hear from those who have embraced the philosophy of Kintsugi in
              their lives.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;Kintsugi has taught me to embrace my imperfections and see
                the beauty in my own journey. It&apos;s a powerful reminder that
                we are all works in progress.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Alex M.
              </h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;The art of Kintsugi has inspired me to approach challenges
                with a new perspective. It&apos;s about finding strength in
                adversity.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Jamie L.
              </h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;Kintsugi is more than just an art form; it&apos;s a way of
                life. It has helped me appreciate the beauty of imperfection in
                myself and others.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Taylor S.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Stay Tuned for More
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-6">
            We&apos;re constantly working to bring you more insights and stories
            about Kintsugi. Stay connected and be the first to know about new
            content and updates.
          </p>
          <Link
            href="/subscribe"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
