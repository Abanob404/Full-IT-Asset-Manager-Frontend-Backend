import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function HandoversNew(){
  const [employee, setEmployee] = useState({ name:'', dept:'', job:'', email:'' });
  const [assets, setAssets] = useState([{ type:'Laptop', brand:'', model:'', serial:'', tag:'' }]);
  const [notes, setNotes] = useState('');
  const signatureCanvasRef = useRef(null);
  const printableRef = useRef(null);

  async function generatePDF(){
    const el = printableRef.current;
    if(!el) return alert('خطأ');
    const canvas = await html2canvas(el, { scale:2, useCORS:true });
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('p','mm','a4');
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData,'JPEG',0,0,pdfWidth,pdfHeight);
    pdf.save('handover.pdf');
  }

  return (<div>
    <h2>إنشاء ورقة استلام</h2>
    <div className='card'>
      <label>اسم الموظف</label>
      <input className='input' value={employee.name} onChange={e=>setEmployee({...employee,name:e.target.value})} />
      <div style={{marginTop:12}}><button className='btn' onClick={generatePDF}>تصدير PDF</button></div>
    </div>

    <div style={{position:'absolute',left:-9999,top:-9999}} aria-hidden>
      <div ref={printableRef} style={{width:794,padding:24,boxSizing:'border-box',background:'#fff'}}>
        <h3>Manazel</h3>
        <div><strong>الاسم:</strong> {employee.name}</div>
        <div><strong>القسم:</strong> {employee.dept}</div>
      </div>
    </div>
  </div>);
}
