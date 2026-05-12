import React, { useState, useEffect } from 'react';

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
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Dine-in');
  const [tableNumber, setTableNumber] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setStep(1), 300);
    }
  }, [isOpen]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleFinalCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    let message = `Halo Bintangbrilian Coffeeshop! Saya ingin memesan:\n\n`;
    message += `*Detail Pelanggan:*\n`;
    message += `- Nama: ${customerName}\n`;
    message += `- Tipe: ${orderType}\n`;
    message += `- ${orderType === 'Dine-in' ? 'Nomor Meja' : 'Alamat Pengiriman'}: ${tableNumber}\n\n`;
    
    message += `*Daftar Pesanan:*\n`;
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`;
    });
    
    if (notes.trim() !== '') {
      message += `\n*Catatan Tambahan:*\n${notes}\n`;
    }
    
    message += `\n*Total Harga: ${formatPrice(totalPrice)}*`;
    message += `\n\nTerima kasih!`;

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
        
        {step === 1 ? (
          <>
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

            {cartItems.length > 0 && (
              <div className="cart-notes">
                <textarea 
                  placeholder="Tambahkan catatan pesanan (opsional)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            )}

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <button 
                className="checkout-btn" 
                onClick={() => setStep(2)}
                disabled={cartItems.length === 0}
              >
                Lanjutkan Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="checkout-form-container">
            <button className="back-btn" onClick={() => setStep(1)}>← Kembali ke Keranjang</button>
            <h3>Lengkapi Data Anda</h3>
            <form onSubmit={handleFinalCheckout} className="checkout-form">
              <div className="form-group">
                <label>Nama Pemesan</label>
                <input 
                  type="text" 
                  required 
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="form-group">
                <label>Tipe Pesanan</label>
                <select value={orderType} onChange={e => setOrderType(e.target.value)}>
                  <option value="Dine-in">Dine-in (Makan di tempat)</option>
                  <option value="Takeaway">Takeaway (Bungkus)</option>
                  <option value="Delivery">Delivery (Kirim)</option>
                </select>
              </div>
              <div className="form-group">
                <label>{orderType === 'Dine-in' ? 'Nomor Meja' : 'Alamat Lengkap / Patokan'}</label>
                <textarea 
                  required
                  value={tableNumber}
                  onChange={e => setTableNumber(e.target.value)}
                  placeholder={orderType === 'Dine-in' ? "Meja 04" : "Jl. Jendral Sudirman No. 1..."}
                ></textarea>
              </div>
              
              <div className="cart-footer form-footer">
                <button type="submit" className="checkout-btn whatsapp-submit-btn">
                  Kirim Pesanan via WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
