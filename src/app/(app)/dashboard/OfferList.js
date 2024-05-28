
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/hooks/auth';

const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const [promoCodeAdded, setPromoCodeAdded] = useState({});
  const [csrfToken, setCsrfToken] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/offers');
        setOffers(response.data);
        console.log("OFERTASSS", response.data);
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();

    const getCsrfToken = () => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('XSRF-TOKEN=')) {
          return cookie.substring('XSRF-TOKEN='.length, cookie.length);
        }
      }
      return null;
    };

    const token = getCsrfToken();
    setCsrfToken(token);
  }, []);

  const handlePromoCode = async (offerId) => {
    try {
      console.log('Token CSRF:', csrfToken);
      const response = await axios.post(
        `http://localhost:8000/api/promotional-codes/${offerId}/generate`,
        null,
        {
          headers: {
            'X-CSRF-TOKEN': csrfToken,
          },
        }
      );
      setPromoCodeAdded((prevCodes) => ({ ...prevCodes, [offerId]: true }));
      console.log(`¡Agregaste el código único promocional de la oferta ${offerId}`);
    } catch (error) {
      console.error('Error generating promotional code:', error);
    }
  };

  return (
    <div className="offer-list">
      <h2>Lista de Ofertas de Alquiler de Habitaciones en Hoteles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">{offer.title}</h3>
            <p className="text-gray-700">{offer.description}</p>
            <img src={`http://localhost:8000/${offer.image}`} alt={offer.title} className="w-full h-48 object-cover mt-4" />
            <button onClick={() => handlePromoCode(offer.id)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              {promoCodeAdded[offer.id] ? 'Borrar código único promocional' : 'Agregar código único promocional'}
            </button>
            {promoCodeAdded[offer.id] && (
              <p className="mt-2 text-green-600">
                ¡Agregaste el código único promocional de la oferta {offer.title}!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferList;
