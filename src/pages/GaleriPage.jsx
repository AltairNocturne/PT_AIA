import React, { useState, useMemo } from 'react';
import GaleriHero from '../components/galeri/GaleriHero';
import GaleriFilter from '../components/galeri/GaleriFilter';
import GaleriGrid from '../components/galeri/GaleriGrid';
import GaleriLightbox from '../components/galeri/GaleriLightbox';
import GaleriCta from '../components/galeri/GaleriCta';
import { galeriItems } from '../data/galeriData';

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Compute category counts
  const counts = useMemo(() => {
    const map = { all: galeriItems.length };
    galeriItems.forEach((it) => {
      map[it.category] = (map[it.category] || 0) + 1;
    });
    return map;
  }, []);

  // Filter items based on category & search query
  const filteredItems = useMemo(() => {
    return galeriItems.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.id.toLowerCase().includes(q) ||
        item.title.en.toLowerCase().includes(q) ||
        item.desc.id.toLowerCase().includes(q) ||
        item.desc.en.toLowerCase().includes(q) ||
        item.location.id.toLowerCase().includes(q) ||
        item.location.en.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      <GaleriHero />

      <GaleriFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        counts={counts}
      />

      <GaleriGrid
        items={filteredItems}
        onOpenLightbox={handleOpenLightbox}
      />

      <GaleriCta />

      <GaleriLightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex ?? 0}
        items={filteredItems}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
