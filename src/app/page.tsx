"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Menu, MessageCircle, Phone, Search, X } from "lucide-react";

const categories = [
  { name: "Sanitaryware", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85", count: "Explore collection" },
  { name: "Sinks & Basins", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=85", count: "Explore collection" },
  { name: "Faucets", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85", count: "Explore collection" },
  { name: "Bathroom accessories", image: "https://images.unsplash.com/photo-1584622781867-13b5a4a015a3?auto=format&fit=crop&w=900&q=85", count: "Explore collection" },
];

const products = [
  { name: "Form 01 Countertop Basin", category: "Wash Basins", image: "https://images.unsplash.com/photo-1603825491103-bd638b1873b0?auto=format&fit=crop&w=900&q=85", tag: "Featured" },
  { name: "Arc wall-hung commode", category: "Toilets / Commodes", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85", tag: "New arrival" },
  { name: "Line single lever tap", category: "Faucets", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85", tag: "Featured" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main>
      <div className="topbar"><span>Trade, project & retail supply</span><span>Product information available on request <ArrowRight size={13} /></span></div>
      <nav className="nav shell">
        <button className="mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <button className="logo" onClick={() => scrollTo("home")} aria-label="The Desire Group home"><img src="/desire-group-logo-reconstructed.svg" alt="The Desire Group" /></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>Home</button><button onClick={() => scrollTo("about")}>About</button><button onClick={() => scrollTo("products")}>Products</button><button onClick={() => scrollTo("why-us")}>Why us</button><button onClick={() => scrollTo("gallery")}>Gallery</button><button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
        <div className="nav-actions"><button aria-label="Search"><Search size={18} /></button><button className="outline-btn small" onClick={() => scrollTo("quote")}>Request a quote <ArrowRight size={15} /></button></div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy shell"><p className="eyebrow light">Hardware for considered spaces</p><h1>Make room<br /><em>for better.</em></h1><p className="hero-sub">A considered range of sanitaryware, fittings and hardware for homes, hospitality and the spaces in between.</p><button className="solid-btn" onClick={() => scrollTo("products")}>Explore products <ArrowRight size={17} /></button></div>
        <div className="hero-note">THE DESIRE GROUP <span>—</span> EST. INFORMATION TO BE CONFIRMED</div>
      </section>

      <section id="about" className="intro shell"><div className="section-kicker">01 / About us</div><div><h2>Everyday essentials,<br /><em>beautifully considered.</em></h2><div className="intro-grid"><p>We bring together the pieces that make a space work — from the first tap to the final finishing touch. Our collection is shaped around practical choice, clear advice and an easier way to source hardware.</p><p>Whether you are planning a single bathroom or specifying for a larger project, we make it simple to find what fits. <span className="placeholder">[Company story and location to be added]</span></p></div><button className="text-btn" onClick={() => scrollTo("why-us")}>Discover The Desire Group <ArrowRight size={16} /></button></div></section>

      <section className="categories section-muted"><div className="shell"><div className="section-head"><div><p className="eyebrow">Browse the collection</p><h2>Find your starting point</h2></div><button className="arrow-controls" aria-label="Next category"><ChevronLeft size={17} /><ChevronRight size={17} /></button></div><div className="category-grid">{categories.map((item, i) => <button className="category-card" key={item.name} onClick={() => scrollTo("products")}><img src={item.image} alt={item.name} /><span className="category-number">0{i + 1}</span><div className="category-label"><span>{item.name}</span><ArrowRight size={17} /></div></button>)}</div></div></section>

      <section id="products" className="products shell"><div className="section-head"><div><p className="eyebrow">The collection</p><h2>Featured products</h2></div><button className="text-btn" onClick={() => scrollTo("catalogue")}>View catalogue <ArrowRight size={16} /></button></div><div className="filter-row">{["All products", "Sanitaryware", "Faucets", "Accessories", "Hardware"].map(x => <button className={activeCategory === x ? "active" : ""} key={x} onClick={() => setActiveCategory(x)}>{x}</button>)}<span className="filter-note">Product details & pricing available on request</span></div><div className="product-grid">{products.map((p, i) => <article className="product-card" key={p.name}><div className="product-image"><img src={p.image} alt={p.name} /><span>{p.tag}</span><button aria-label={`Request price for ${p.name}`} onClick={() => scrollTo("quote")}><ArrowRight size={17} /></button></div><p>{p.category}</p><h3>{p.name}</h3><button className="request-link" onClick={() => scrollTo("quote")}>Request price <ArrowRight size={14} /></button></article>)}</div></section>

      <section id="why-us" className="why"><div className="shell why-grid"><div><p className="eyebrow light">Why The Desire Group</p><h2>Good spaces start<br /><em>with good choices.</em></h2><p className="why-intro">A straightforward approach to sourcing the essentials. No inflated promises — just a range built for real projects and responsive service when you need it.</p></div><div className="value-list"><div><span>01</span><h3>Quality, considered</h3><p>Product details and supporting information are shared clearly, so you can choose with confidence.</p></div><div><span>02</span><h3>Range that works</h3><p>Sanitaryware, fittings and hardware brought together in one practical collection.</p></div><div><span>03</span><h3>Here to help</h3><p>Personal support for product enquiries, availability and project requirements.</p></div></div></div></section>

      <section id="catalogue" className="catalogue shell"><div className="catalogue-copy"><p className="eyebrow">Built for browsing</p><h2>The complete<br /><em>catalogue.</em></h2><p>Explore the full range by category. Product imagery and information are being prepared for the complete catalogue.</p><button className="solid-btn dark" onClick={() => scrollTo("products")}>Browse all products <ArrowRight size={16} /></button></div><div className="catalogue-image"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" alt="Detail of a modern bathroom faucet" /><div className="catalogue-stamp">DG<br /><span>COLLECTION</span></div></div></section>

      <section id="gallery" className="gallery section-muted"><div className="shell"><div className="section-head"><div><p className="eyebrow">A closer look</p><h2>In and around the collection</h2></div><span className="placeholder">[Business photography to be added]</span></div><div className="gallery-grid"><img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85" alt="Modern bathroom interior" /><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85" alt="Bathroom details" /><img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85" alt="Sanitaryware detail" /></div></div></section>

      <section id="quote" className="quote shell"><div><p className="eyebrow">Start a conversation</p><h2>Let&apos;s find<br /><em>what fits.</em></h2><p>Tell us what you are looking for and we&apos;ll get back to you with availability and product information.</p><div className="contact-mini"><a href="tel:+0000000000"><Phone size={16} /> Phone details to be added</a><a href="#contact"><MessageCircle size={16} /> WhatsApp details to be added</a></div></div><form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}><label>Your name<input required placeholder="e.g. Alex Morgan" /></label><label>Phone or email<input required placeholder="How can we reach you?" /></label><div className="form-row"><label>Product / category<input placeholder="What are you looking for?" /></label><label>Quantity<input placeholder="If known" /></label></div><label>Message<textarea rows={4} placeholder="Tell us a little about your project..." /></label><label className="select-label">Preferred contact<select><option>Phone</option><option>WhatsApp</option><option>Email</option></select><ChevronDown size={15} /></label><button className="solid-btn dark full" type="submit">{submitted ? "Enquiry received" : "Request a quote"} <ArrowRight size={16} /></button>{submitted && <small className="success">Thank you. Your enquiry has been recorded as a placeholder submission.</small>}</form></section>

      <section id="contact" className="contact"><div className="shell contact-grid"><div><button className="logo footer-logo" onClick={() => scrollTo("home")} aria-label="The Desire Group home"><img src="/desire-group-logo-reconstructed.svg" alt="The Desire Group" /></button><p>Hardware for considered spaces.<br /><span className="placeholder">[Company address and details to be added]</span></p></div><div><p className="eyebrow light">Get in touch</p><p className="contact-placeholder">Phone, WhatsApp, email<br />and business address<br /><span>[Information to be confirmed]</span></p></div><div><p className="eyebrow light">Visit</p><p className="contact-placeholder">Google Maps<br /><span>[Map link to be added]</span></p></div></div><div className="footer-bottom shell"><span>© 2026 The Desire Group</span><span>Product information & pricing available on request</span></div></section>
    </main>
  );
}
