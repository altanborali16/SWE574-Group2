import { useState, useEffect } from "react";
import { basicSearch } from "./BasicSearch";

// Custom hook olarak searchEngine
export const useSearchEngine = (data, search) => {
  const [basicSearchResults, setBasicSearchResults] = useState([]);

  useEffect(() => {
    if (search) {
      // Arama yapıldığında basicSearch fonksiyonunu çağırıyoruz ve sonuçları state'e kaydediyoruz
      const tempResults = basicSearch(data, search);
      setBasicSearchResults(tempResults);
    }
  }, [data, search]); // data veya search değiştiğinde effect tetiklenecek

  return basicSearchResults; // Sonuçları döndürüyoruz
};
