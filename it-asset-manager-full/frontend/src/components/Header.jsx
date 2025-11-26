import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="site-header fade-in">
      <div className="brand">
        <img className="logo" src="/public/logo-manazel.png" alt="Manazel Logo" />
        <div>
          <h1>IT Asset Manager</h1>
          <div className="muted" style={{fontSize:12}}>إدارة أصول وتقنيات المعلومات</div>
        </div>
      </div>

      <nav>
        <Link to="/" className="nav-link">لوحة التحكم</Link>
        <Link to="/assets" className="nav-link">الأصول</Link>
        <Link to="/handovers" className="nav-link">التسليمات</Link>
        <Link to="/handovers/new" className="nav-link">إنشاء تسليم</Link>
        <Link to="/maintenance" className="nav-link">الصيانات</Link>
        <Link to="/network" className="nav-link">مراقبة الشبكة</Link>
      </nav>
    </header>
  );
}
