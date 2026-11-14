import React, { useState, useMemo } from 'react';
import BeritaHero from '../components/berita/BeritaHero';
import BeritaFilter from '../components/berita/BeritaFilter';
import BeritaGrid from '../components/berita/BeritaGrid';
import BeritaDetailModal from '../components/berita/BeritaDetailModal';
import BeritaNewsletter from '../components/berita/BeritaNewsletter';
import { beritaArticles } from '../data/beritaData';

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Compute category counts
  const counts = useMemo(() => {
    const map = { all: beritaArticles.length };
    beritaArticles.forEach((it) => {
      map[it.category] = (map[it.category] || 0) + 1;
    });
    return map;
  }, []);

  // Featured article is the one marked featured or the first item
  const featuredArticle = useMemo(() => {
    return beritaArticles.find((it) => it.featured) || beritaArticles[0];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return beritaArticles.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.id.toLowerCase().includes(q) ||
        item.title.en.toLowerCase().includes(q) ||
        item.excerpt.id.toLowerCase().includes(q) ||
        item.excerpt.en.toLowerCase().includes(q) ||
        item.author.name.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      <BeritaHero
        featuredArticle={featuredArticle}
        onOpenArticle={(art) => setSelectedArticle(art)}
      />

      <BeritaFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        counts={counts}
      />

      <BeritaGrid
        articles={filteredArticles}
        onOpenArticle={(art) => setSelectedArticle(art)}
      />

      <BeritaNewsletter />

      <BeritaDetailModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
