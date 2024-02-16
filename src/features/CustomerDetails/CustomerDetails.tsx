import React, { useState, ChangeEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import "./customer.module.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import OtsiLogo from "../../assets/images/Otsilogo.png"

interface CustomerData {
  FirstName: string;
  LastName: string;
  'Address Line 1': string;
  'Address Line 2': string;
  emailAddress: string;
}

declare module 'jspdf' { interface jsPDF { autoTable: (options: any) => jsPDF; } }
const CustomerDetails: React.FC = () => {
  const [formData, setFormData] = useState<CustomerData>({
    FirstName: '',
    LastName: '',
    'Address Line 1': '',
    'Address Line 2': '',
    emailAddress: ''
  });
  const [plan, setplan] = useState<string|null>(null)
  useEffect(() => {
    const PlanValue = sessionStorage.getItem("PlanName") 
    setplan(PlanValue ? PlanValue.replace(/['"]+/g, '') : "");
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(formData);
    const doc = new jsPDF();
    const imgData = OtsiLogo;

    const imageWidth = 30;
    const imageHeight = 20;

    const xText = 70;
    const yText = 30;

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const xImage = pageWidth - imageWidth - 20;
    const yImage = pageHeight - imageHeight - 5;

    doc.setFontSize(12);
    doc.setTextColor(0);

    let content: any[] = [];
    Object.entries(formData).forEach(([key, value], index) => {
      content.push([{ content: key, styles: { fontStyle: 'bold' } }, ':    ' + value]);
    });

    const yPos = 70;

    doc.autoTable({
      body: content,
      startY: yPos,
      theme: 'plain',
      styles: { cellPadding: 2, fontSize: 12 },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 'auto' }
      },
      margin: { left: 40 },
      createdHeaderCell: function (cell: any, data: any) {
        cell.styles.fontStyle = 'bold';
      }
    });

    const billingTextWidth = doc.getStringUnitWidth("Billing Successful") * 20;
    const planTextWidth = doc.getStringUnitWidth(plan ? plan : "") * 16;
    const totalWidth = billingTextWidth + planTextWidth;
    const xBillingText = (pageWidth - totalWidth) / 3;
    const xPlanText = xBillingText + billingTextWidth;
    doc.setTextColor(0, 100, 0);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(20);
    doc.text("Billing Successful", xBillingText, yText);
    doc.setTextColor(plan === "Basic" ? 'green' : plan === "Prime" ? 'gray' : 'orange');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(plan ? plan : "", xPlanText, yText);

    doc.addImage(imgData, 'PNG', xImage, yImage, imageWidth, imageHeight);

    const now = new Date();
    const footer = `Generated on: ${now.toLocaleString()}`;
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10);
    doc.text(footer, 10, doc.internal.pageSize.height - 10);

    doc.save('customer_details.pdf');
    navigate('/dashboard', {});
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 3fr',
        gap: 2,
        maxWidth: '600px',
        margin: '20px auto',
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(formData).map((key) => (
        <TextField
          key={key}
          label={key}
          variant="standard"
          id={key}
          name={key}
          value={formData[key as keyof CustomerData]}
          onChange={handleChange}
          fullWidth
        />
      ))}
      <button type="button" className='last-button' onClick={handleSubmit}
        style={{
          gridColumn: 'span 2',
          placeSelf: 'center',
        }}>
        Submit
      </button>
    </Box>
  );
};

export default CustomerDetails;
