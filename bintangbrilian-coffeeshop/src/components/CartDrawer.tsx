import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartDrawerProps {
  cartItems: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export default function CartDrawer({ cartItems, isOpen, onClose, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = 'Halo Bintangbrilian Coffeeshop! Saya ingin memesan:\n\n';
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`;
    });
    message += `\n*Total Harga: ${formatPrice(totalPrice)}*`;
    message += `\n\nMohon info untuk pembayaran dan pengiriman. Terima kasih!`;

    const phoneNumber = '6281234567890';
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Keranjang Belanja</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Keranjang masih kosong. Yuk pesan kopi!</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                  <div className="cart-item-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button 
            className="checkout-btn" 
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Checkout via WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
