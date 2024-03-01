import { useState } from 'react';
import './SneakersDisplay.css';
import './index.css';
const SNEAKERS = [
        {
            id: "1",
            colorway: "Pine Green",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/bkkj0lqzlwlwdwtofqxs",
            model: "Blazer Low 77 Vintage",
            brand: "Nike",
        },
        {
            id: "2",
            colorway: "Reverse Infrared",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/RPlzC_CBHjiMM4dr90gdU",
            model: "Air Max 90",
            brand: "Nike",
        },
        {
            id: "3",
            colorway: "White/Black/Desert",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/0bf9336b-03c9-4cbd-b482-f4e80b770582",
            model: "Court Legacy",
            brand: "Nike",
        },
        {
            id: "5",
            colorway: "Beluga 2.0",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/irxakb1ij0uzmcvn9szo",
            model: "Yeezy 350 v2",
            brand: "Adidas",
        },
        {
            id: "6",
            colorway: "Pumpkin Spice",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/g9tjjjdn476nhou1c1dj",
            model: "Grid SD",
            brand: "Saucony",
        },
        {
            id: "7",
            colorway: "Golden Coast",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/erg1lxa8x29h1wtbog9a",
            model: "Checkerboard Slip-On",
            brand: "Vans",
        },
        {
            id: "8",
            colorway: "Have a Nike Day",
            imageUrl:
                "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/u4z27k4wyzr7bxatlfgj",
            model: "Air Max 1",
            brand: "Nike",
        },
    
    ];

    const SneakersDisplay = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedBrand, setSelectedBrand] = useState('All');
    
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleBrandFilter = (brand) => {
        setSelectedBrand(brand);
      };
    
      const filteredSneakers = SNEAKERS.filter(
        (sneaker) =>
          (selectedBrand === 'All' || sneaker.brand === selectedBrand) &&
          (sneaker.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
           sneaker.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    
      return (
        <div style={{ width: '100%' }}>
          <header className="header">
            <div className="brand-buttons-container">
              <button className={`button ${selectedBrand === 'All' ? 'active' : ''}`} onClick={() => handleBrandFilter('All')}>All</button>
              <button className={`button ${selectedBrand === 'Nike' ? 'active' : ''}`} onClick={() => handleBrandFilter('Nike')}>Nike</button>
              <button className={`button ${selectedBrand === 'Adidas' ? 'active' : ''}`} onClick={() => handleBrandFilter('Adidas')}>Adidas</button>
              <button className={`button ${selectedBrand === 'Saucony' ? 'active' : ''}`} onClick={() => handleBrandFilter('Saucony')}>Saucony</button>
              <button className={`button ${selectedBrand === 'Vans' ? 'active' : ''}`} onClick={() => handleBrandFilter('Vans')}>Vans</button>
            </div>
            <input
              type="text"
              placeholder="Search Sneakers"
              onChange={handleSearchChange}
              className="search-input"
            />
          </header>
          <div className="sneakers-grid">
            {filteredSneakers.map((sneaker) => (
              <div key={sneaker.id} className="sneaker-card">
                <img src={sneaker.imageUrl} alt={`${sneaker.model} ${sneaker.colorway}`} className="sneaker-image" />
                <h3 className="sneaker-model">{sneaker.model}</h3>
                <p className="sneaker-colorway">{sneaker.colorway}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default SneakersDisplay;
    