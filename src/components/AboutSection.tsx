import Image from 'next/image';

interface ReviewItem {
  name: string;
  text: string;
  date: string;
}

export default function AboutSection() {
  const reviews: ReviewItem[] = [
    { name: "Taylor", text: "The Pink Velvet Latte was amazing! Creamy, flavorful, and not overly sweet.", date: "February 28, 2026" },
    { name: "Ariana", text: "Loved the Berry Cheesecake. It tasted fresh and the presentation was beautiful.", date: "March 15, 2026" },
    { name: "Kylie", text: "The Strawberry Matcha was my favorite. Such a unique and refreshing drink!", date: "January 11, 2026" },
    { name: "Selena", text: "Cozy place with delicious food. The Pink Creamy Pasta was rich and satisfying.", date: "May 17, 2026" },
  ];

  return (
    <section id="about" className="pt-12 pb-10 px-6 scroll-mt-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-15">
          <h3 className="text-pink-500 font-black tracking-[0.1em] uppercase text-3xl mb-12">
            About Us
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="w-full md:w-2/5">
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about.jpg"
                alt="Tentang Sistech"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Why Choose <span className="text-pink-500">Sistech Cafe?</span>
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed text-justify space-y-8">
              <p>
                <strong>Sistech Cafe</strong>  is a local coffee shop that serves local coffee with 
                a warm and welcoming atmosphere. What makes it special is that the cafe is fully operated 
                by talented and inspiring women who bring creativity, care, and teamwork into every part of the business.

              </p>
              <p>
                Every cup brings the authentic taste of Indonesian coffee and the inspiring story of the women behind it. 
                At Sistech Cafe, enjoy locally sourced coffee, handcrafted drinks, and a welcoming atmosphere—perfect 
                for meeting friends, working, or simply relaxing.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-pink-500 font-black tracking-[0.1em] uppercase text-3xl text-center mb-12">
            Ulasan Pelanggan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow flex flex-col h-full">
                <h4 className="font-bold text-lg mb-2 text-gray-800">{rev.name}</h4>
                <p className="text-gray-600 text-sm mb-4 italic flex-grow">&ldquo;{rev.text}&rdquo;</p>
                <div className="mt-auto">
                  <span className="text-xs text-pink-400 font-semibold">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}