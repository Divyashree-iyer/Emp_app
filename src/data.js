import React from 'react';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'employee-list',
        icon: <RiContactsLine />,
      },
      {
        name: 'employee-master',
        icon: <IoMdContacts />,
      },
    ],
  },
];
export const rows = [
  { id: 1, name: 'Divyashree Iyer', emp_no:'123', start_date: '02-28-1999',desgination:'developer',salary:'6.0' },
  { id: 2, name: 'Arjun Shah', emp_no:'124', start_date: '03-05-1997',desgination:'developer',salary:'6.0' },
  { id: 3, name: 'Vijay Punjabi',emp_no:'523', start_date: '07-12-2002',desgination:'developer',salary:'6.0' },
  { id: 4, name: 'Oscar Wilde', emp_no:'163', start_date: '02-28-1999',desgination:'developer',salary:'6.0' },
  { id: 5, name: 'Kenny Seb', emp_no:'120', start_date: '01-01-1970',desgination:'developer',salary:'6.0' },
  { id: 6, name: 'Mita John', emp_no:'193', start_date: '04-01-2000',desgination:'developer',salary:'6.0' },
  { id: 7, name: 'Jimmy Gor', emp_no:'923', start_date: null,desgination:'developer',salary:'6.0' }
]
export const columns = [
  { accessor: 'emp_no', label: 'Employee No.' },
  { accessor: 'name', label: 'Employee Name' },
  { accessor: 'desgination', label: 'Designation' },
  { accessor: 'start_date', label: 'Date of Joining' },
  { accessor: 'salary', label: 'Salary(PA)' },
]