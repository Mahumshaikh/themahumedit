import { Instagram, Mail, Music } from "lucide-react";

const Button = ({ children, href, variant = "solid" }: { children: React.ReactNode; href: string; variant?: "solid" | "outline" }) => {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10";
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      <div className={`${base} ${styles}`}>{children}</div>
    </a>
  );
};

export default function Home() {
  const brands = [
    { name: "Vrai", category: "Jewellery" },
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
    { id: "vrai-1", title: "Vrai", description: "Jewelry showcase and styling", video: "/vrai-1.mp4" },
    { id: "vrai-2", title: "Vrai", description: "Unboxing my new pieces", video: "/vrai-2.mp4" },
    { id: "linjer", title: "Linjer", description: "Mother's day gifting campaign", video: "/linjer.mp4" },
    { id: "carat", title: "Carat London", description: "Store visit, Jewelry showcase and styling", video: "/carat-london.mp4" },
    { id: "monica", title: "Monica Vinader", description: "Gifting campaign for jewellery brand", video: "/monica-vinader.mp4" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          <h1 className="text-xl font-bold">themahumedit</h1>
          <div className="flex gap-6 text-sm">
            <a href="#brands" className="hover:text-accent transition">Brands</a>
            <a href="#portfolio" className="hover:text-accent transition">Portfolio</a>
            <a href="#rates" className="hover:text-accent transition">Rates</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Content Creator & UGC Specialist</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              London-based creator specializing in fashion, jewelry, and accessories content. I craft authentic, engaging UGC videos and photos that showcase your products and connect with audiences who care about style.
            </p>
            <div className="flex gap-4">
              <Button href="#contact">Get in Touch</Button>
              <Button href="https://instagram.com/themahumedit" variant="outline">
                <Instagram className="w-4 h-4" /> Instagram
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
              <img src="/themahumedit_logo.png" alt="Mahum Shaikh" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I'm Mahum, a London-based content creator specializing in fashion, jewelry, and accessories. My journey in content creation is rooted in authenticity and a genuine love for style.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I create compelling UGC content that showcases your products authentically. I believe in building real relationships with brands, ensuring our shared vision shines through in every video and photo.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Some Brands I've Worked With</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-muted rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-muted-foreground">{brand.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{brand.name}</h4>
                <p className="text-sm text-muted-foreground">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <video controls className="w-full h-64 bg-black object-cover">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Samples */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Photo Samples</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {photoSamples.map((sample) => (
              <div
                key={sample.brand}
                className={`relative rounded-lg overflow-hidden border border-border group cursor-pointer ${
                  sample.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"
                }`}
              >
                <img src={sample.image} alt={sample.brand} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <h4 className="text-lg font-semibold text-white">{sample.brand}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="py-20 bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-12">Rates</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {rates.map((rate) => (
              <div key={rate.service} className="p-8 bg-card border border-border rounded-lg">
                <h4 className="text-lg font-semibold mb-2">{rate.service}</h4>
                <p className="text-3xl font-bold text-primary">{rate.price}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8">
            <strong>Custom packages available.</strong> Rates vary based on project scope, usage rights, and timeline. Let's discuss what works best for your brand.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Let's Work Together</h3>
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
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2024 Mahum Shaikh. All rights reserved.</p>
      </footer>
    </div>
  );
}
