import { button } from "@/components/ui/button";
import { Instagram, Mail, Music } from "lucide-react";

export default function Home() {
  const brands = [
    { name: "Vrai", category: "Jewellery", featured: true },
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
    { brand: "Timex", image: "/timex-sample.jpg", size: "large" },
    { brand: "Monica Vinader", image: "/monica-vinader-sample.jpg", size: "medium" },
    { brand: "Club L London", image: "/club-london-sample.jpg", size: "medium" },
    { brand: "Miphai Collection", image: "/miphai-sample.jpg", size: "large" },
  ];

  const portfolioItems = [
    { id: "vrai-1", title: "Vrai", description: "Jewelry showcase and styling", video: "/vrai-1.mov" },
    { id: "vrai-2", title: "Vrai", description: "Unboxing my new pieces", video: "/vrai-2.mov" },
    { id: "linjer", title: "Linjer", description: "Mother's day gifting campaign", video: "/linjer.mov" },
    { id: "carat", title: "Carat London", description: "Store visit, Jewelry showcase and styling", video: "/carat-london.mp4" },
    { id: "monica", title: "Monica Vinader", description: "Gifting campaign for jewellery brand", video: "/monica-vinader.mp4" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">themahumedit</h1>
          <div className="flex gap-6">
            <a href="#brands" className="text-sm hover:text-accent transition-colors">Brands</a>
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Portfolio</a>
            <a href="#rates" className="text-sm hover:text-accent transition-colors">Rates</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Content Creator & UGC Specialist
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                London-based creator specializing in fashion, jewelry, and accessories content. I craft authentic, engaging UGC videos and photos that showcase your products and connect with audiences who care about style.
              </p>
              <div className="flex gap-4">
                <a href="#contact">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get in Touch
                  </button>
                </a>
                <a href="https://instagram.com/themahumedit" target="_blank" rel="noopener noreferrer">
                  <button variant="outline">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img 
                  src="/themahumedit_logo.png" 
                  alt="Mahum Shaikh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm Mahum, a London-based content creator specializing in fashion, jewelry, and accessories. My journey in content creation is rooted in authenticity and a genuine love for style.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I create compelling UGC content that showcases your products authentically. I believe in building real relationships with brands, ensuring our shared vision shines through in every video and photo. Let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-4xl font-bold mb-12">Some Brands I've Worked With</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.name}
                className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{brand.name}</h4>
                <p className="text-sm text-muted-foreground">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container">
          <h3 className="text-4xl font-bold mb-12">Portfolio</h3>
          <div className="mb-8 p-4 bg-primary/5 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> I'm showcasing a selection of my work here. Due to confidentiality agreements with brand partners, I'm unable to display the full scope of my portfolio publicly. For a complete showcase of my capabilities and past collaborations, please reach out directly.
            </p>
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Here's a selection of my recent work. Most of my content is video-based, showcasing products and lifestyle moments that resonate with audiences.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {item.video ? (
                  <video 
                    src={item.video}
                    controls
                    className="w-full h-64 bg-black object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <Music className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-primary/5 border border-border rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              Ready to see more? Check out my latest content on Instagram or get in touch to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Samples Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h3 className="text-4xl font-bold mb-12">Photo Samples</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A selection of my photography work across various brands and styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {photoSamples.map((sample) => (
              <div 
                key={sample.brand}
                className={`relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer ${
                  sample.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"
                }`}
              >
                <img
                  src={sample.image}
                  alt={sample.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <h4 className="text-lg font-semibold text-white">{sample.brand}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-4xl font-bold mb-12">Latest on Instagram</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
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
      <section id="rates" className="py-20">
        <div className="container">
          <h3 className="text-4xl font-bold mb-12">Rates</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {rates.map((rate) => (
              <div 
                key={rate.service}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-2">{rate.service}</h4>
                <p className="text-3xl font-bold text-primary">{rate.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-secondary/30 border border-border rounded-lg">
            <p className="text-muted-foreground mb-2">
              <strong>Custom packages available.</strong> Rates vary based on project scope, usage rights, and timeline. Let's discuss what works best for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-4xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to create something amazing? I'd love to hear about your project and how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:mahumashaikh@hotmail.com">
              <button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </button>
            </a>
            <a href="https://instagram.com/themahumedit" target="_blank" rel="noopener noreferrer">
              <button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4 mr-2" />
                @themahumedit
              </button>
            </a>
            <a href="https://tiktok.com/@themahumedit" target="_blank" rel="noopener noreferrer">
              <button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Music className="w-4 h-4 mr-2" />
                TikTok
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Mahum Shaikh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
