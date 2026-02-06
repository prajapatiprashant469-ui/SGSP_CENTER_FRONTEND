import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from './services/api/categoryService'; // Update to the correct path if it's in 'services/api' folder

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const loadCategories = async () => {
        try {
          const nonArchivedCategories = await fetchCategories();
          setCategories(nonArchivedCategories);
        } catch (error) {
          console.error('Error loading categories:', error);
        }
      };

      loadCategories();
    }
  }, [isOpen]);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={closeSidebar}>
      <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;