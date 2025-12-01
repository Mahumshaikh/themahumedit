import { Instagram, Mail, Music } from "lucide-react";

const Button = ({
  children,
  href,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
}) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition";
  const styles =
    variant === "solid"
      ? "bg-black text-white hover:bg-neutral-800"
      : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className={`${base} ${styles} ${className}`}>{children}</div>
    </a>
  );
};

export default function Home() {
  const brands = [
    { name: "Vrai", category: "Fine Jewellery" },
    { name: "Linjer", category: "Jewellery" },
    { name: "Carat London", category: "Fine Jewellery" },
    { name: "Monica Vinader", category: "Jewellery" },
    { name: "Henry Watches", category: "Watches" },
    { name: "Timex", category: "Watches" },
  ];

  const rates = [
    { service: "One Video with Voiceover", price: "£350" },
    { service: "Three Videos with Voiceover", price: "£1000" },
    { service: "One Post (Photos) and Story", price: "£300" },
  ];

  const photoSamples = [
    { brand: "Timex Escape Collection", image: "/timex2.jpg", size: "large" },
    { brand: "Timex", image: "/timex3.jpg", size: "large" },
    { brand: "Monica Vinader", image: "/monica-vinader-sample.jpg", size: "large" },
    { brand: "Club L London", image: "/club-london-sample.jpg", size: "large" },
    { brand: "Miphai Collection", image: "/miphai-sample.jpg", size: "large" },
    { brand: "Timex, Time is a Gift", image: "/timex-sample.JPG", size: "large" },
  ];

  const portfolioItems = [
    { id: "vrai-1", title: "Vrai", description: "Jewellery showcase and styling", video: "/vrai-1.mp4" },
    { id: "vrai-2", title: "Vrai", description: "Unboxing my new pieces", video: "/vrai-2.mp4" },
    { id: "linjer", title: "Linjer", description: "Mother's day gifting campaign", video: "/Linjer.mp4" },
    { id: "carat", title: "Carat London", description: "Store visit, Jewellery showcase and styling", video: "/caratlondon.mp4" },
    { id: "monica", title: "Monica Vinader", description: "Gifting campaign for jewellery brand", video: "/monica-vinader.mp4" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold">themahumedit</h1>
          <div className="flex gap-6 text-sm">
            <a href="#brands" className="hover:text-primary transition">Brands</a>
            <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
            <a href="#rates" className="hover:text-primary transition">Rates</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-5 items-center">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Content Creator & UGC Specialist
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              London-based creator focused on fashion, jewellery, and accessories. I produce polished UGC photos and videos that highlight your products with style and authenticity, connecting brands with audiences who care about quality and design.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
  <Button href="#contact">Get in Touch</Button>
  <Button href="https://instagram.com/themahumedit" variant="outline">
    <Instagram className="w-4 h-4" /> Instagram
  </Button>
</div>

          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
              <img src="/themahumedit_logo.png" alt="Mahum Shaikh" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="text-lg text-gray-600">
            I'm Mahum, a London-based creator specializing in fashion, jewellery, and accessories.
          </p>
          <p className="text-lg text-gray-600">
            I create content that feels intentional, stylish, and true to each brand's identity — ensuring your products shine with elegance and purpose.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Some Brands I've Worked With</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-gray-400">{brand.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{brand.name}</h4>
                <p className="text-sm text-gray-500">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">Portfolio</h3>
          <div className="mb-8 p-8 bg-white border border-gray-200 rounded-lg text-center">
            <p className="text-gray-500 mb-4">
              <strong>Note:</strong> I'm showcasing a selection of my work here. Due to confidentiality agreements with brand partners, I'm unable to display the full scope publicly. For a complete showcase, reach out directly.
            </p>
          </div>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Here's a selection of my recent work. Most of my content is video-based, showcasing products and lifestyle moments that resonate with audiences.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {item.video ? (
                  <video src={item.video} controls className="w-full h-64 bg-black object-cover" />
                ) : (
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                    <Music className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Ready to see more */}
          <div className="mt-12 p-8 bg-white border border-gray-200 rounded-lg text-center">
            <p className="text-gray-500 mb-4">
              Ready to see more? Check out my latest content on Instagram or get in touch to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Samples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">Photo Samples</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of my photography work across various brands and styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
            {photoSamples.map((sample) => (
              <div
                key={sample.brand}
                className={`relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer ${
                  sample.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"
                }`}
              >
                <img
                  src={sample.image}
                  alt={sample.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <h4 className="text-lg font-semibold text-white">{sample.brand}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">Latest on Instagram</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow my latest content and behind-the-scenes moments on Instagram.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/themahumedit/embed"
              width="320"
              height="500"
              frameBorder="0"
              scrolling="no"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">Rates</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {rates.map((rate) => (
              <div key={rate.service} className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{rate.service}</h4>
                <p className="text-3xl font-bold text-primary">{rate.price}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8">
            <strong>Custom packages available.</strong> Rates vary based on project scope, usage rights, and timeline. Let's discuss what works best for your brand.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">Let's Work Together</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="mailto:mahumashaikh@hotmail.com" variant="outline">
              <Mail className="w-4 h-4" /> Email Me
            </Button>
            <Button href="https://instagram.com/themahumedit" variant="outline">
              <Instagram className="w-4 h-4" /> Instagram
            </Button>
            <Button href="https://tiktok.com/@themahumedit" variant="outline">
              <Music className="w-4 h-4" /> TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© 2024 Mahum Shaikh. All rights reserved.</p>
      </footer>
    </div>
  );
}
