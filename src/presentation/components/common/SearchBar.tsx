/**
 * SearchBar Component
 * Input de búsqueda con debounce para mejor performance
 */

import { useState, useEffect } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
  debounceMs?: number;
}

export function SearchBar({
  placeholder = 'Buscar...',
  onSearch,
  className = '',
  debounceMs = 300,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [inputValue, debounceMs, onSearch]);

  return (
    <div className={`search-bar ${className}`}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Buscar"
      />
      <span className="search-icon" aria-hidden="true">
        🔍
      </span>
    </div>
  );
}
