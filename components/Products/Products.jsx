'use client';
import { useEffect, useState } from "react";
import ArrowIcon from "../../public/icons/left-arrow-logo.svg";
import CheckIcon from "../../public/icons/tick.svg";
import Image from "next/image";
import "./Products.css";
import FilterMenu from "../Filter/FilterMenu";
import Link from "next/link";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'https://fakestoreapi.com/products';
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        alert("Error fetching products: " + error);
      }
    };

    fetchProducts();
  }, []);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const selectSortOption = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  const Dropdown = ({ options }) => (
    <div className="dropdown">
      <button className="sort-button" onClick={toggleDropdown}>
        <p>{sortOption}</p>
        <Image
          style={{ rotate: `${dropdownOpen ? "180deg" : "0deg"}`, transition: "rotate 0.15s ease-in-out" }}
          src={ArrowIcon}
          alt="arrow"
          height={16}
          width={16}
        />
      </button>
      {dropdownOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectSortOption(option)}
              className={`dropdown-item ${option === sortOption ? "selected" : ""}`}
            >
              {option === sortOption && <Image src={CheckIcon} height={26} width={26} alt="check" />}
              <p>{option}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const ProductCard = ({ name, cost, imgSrc }) => (
    <section className="product-card">
      <section className="product-image">
        <Image src={imgSrc} alt={name} height={399} width={300} />
      </section>
      <section className="product-info">
        <div className="info-content">
          <p className="product-name">{name}</p>
          <div className="account-links">
            <Link href="#" style={{ textDecoration: "underline" }}>Sign up</Link>
            {" or "}
            <Link href="#">Create an account to view pricing</Link>
          </div>
        </div>
        <div className="like-icon" style={{ cursor: "pointer" }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
              stroke="#292D32"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
    </section>
  );

  const sortOptions = ["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE: HIGH TO LOW", "PRICE: LOW TO HIGH"];
  const filterOptions = ["IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"];

  return (
    <main id="products-main">
      <hr />
      <section className="top-section">
        <div className="top-left">
          <p className="item-count mobile">3425 ITEMS</p>
          <div
            onClick={() => setShowFilter(prev => !prev)}
            role="button"
            className="filter-toggle"
          >
            <p className="filter-text mobile">FILTERS</p>
            <Image
              style={{ rotate: `${showFilter ? "90deg" : "270deg"}`, transition: "rotate 0.15s ease-in-out" }}
              src={ArrowIcon}
              className="mobile"
              alt="arrow"
              height={16}
              width={16}
            />
            <p className="mobile" style={{  opacity: "100%" }}>
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
          </div>
        </div>
        <div>
          <Dropdown options={sortOptions} />
        </div>
      </section>
      <hr />
      <section className="main-section">
        {showFilter && (
          <section className="filter-section">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input id="custom-checkbox" type="checkbox" className="custom-checkbox" />
              <label htmlFor="custom-checkbox" className="custom-label">CUSTOMIZE</label>
            </div>
            
            {filterOptions.map((option, index) => (
              <FilterMenu key={index} title={option} />
            ))}
          </section>
        )}
        <section className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              cost={product.price}
              imgSrc={product.image}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default ProductPage;
