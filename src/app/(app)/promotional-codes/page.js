'use client';

import React, { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';

const PromotionalCodes = () => {
  const { user } = useAuth({ middleware: 'auth' });
  const [promotionalCodes, setPromotionalCodes] = useState([]);

  useEffect(() => {
    const fetchPromotionalCodes = async () => {
      try {
        const response = await axios.get('/api/promotional-codes');
        setPromotionalCodes(response.data);
      } catch (error) {
        console.error('Error fetching promotional codes:', error);
      }
    };

    fetchPromotionalCodes();
  }, []);

  const createPromotionalCode = async () => {
    console.log("TOQUÉ EL BOTONNNNN");
    try {
      const response = await axios.post('/api/promotional-codes', {
        user_id: user.id,
        offer_id: 4,
        code: 'BGticu',
        status: 'generated'
      });
      console.log('Código promocional creado:', response.data);
    } catch (error) {
      console.error('Error al crear el código promocional:', error);
    }
  };

  const handleCreatePromotionalCode = () => {
    createPromotionalCode();
  };

  return (
    <div>
      <h1>Códigos promocionales</h1>
      {user && (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Correo electrónico: {user.email}</p>
          {/* Agrega más detalles del usuario según sea necesario */}
        </div>
      )}
      <button onClick={handleCreatePromotionalCode}>
        Crear Código Promocional
      </button>
      <table>
        <thead>
          <tr>
            <th>Oferta</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {promotionalCodes.map((code) => (
            <tr key={code.id}>
              <td>{code.offer.name}</td>
              <td>{code.code}</td>
              <td>{code.status}</td>
              <td>
                {code.status === 'generated' && (
                  <button onClick={() => exchangeCode(code.code)}>
                    Canjear
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromotionalCodes;