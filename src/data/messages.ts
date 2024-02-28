import { generateRandomId } from "../utils";

export interface Payslip {
  title: string;
  startDate: string;
  endDate: string;
  amount: number;
  id: string;
  employee: {
    name: string;
    employeeID: string;
    department: string;
    contact: string;
    designation: string;
  };
  employer: {
    name: string;
    address: string;
    EIN: string;
  };
  earnings: {
    basicSalary: string;
    overtimePay: string;
    bonuses: string;
    allowances: string;
  };
  deductions: string;
}

const employeeDetails = {
  name: "John Doe",
  employeeID: "EMP12345",
  department: "Finance",
  contact: "+1 123-456-7890",
  designation: "Backend developer",
};

const employerDetails = {
  name: "ABC Company",
  address: "123 Main St, Cityville, USA",
  EIN: "123456789",
};

const payslips: Payslip[] = [
  {
    title: "January, 2023",
    startDate: "01, Jan 2023",
    endDate: "31, Jan 2023",
    amount: 50000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "40000",
      overtimePay: "5000",
      bonuses: "5000",
      allowances: "2000",
    },
    deductions: "2000",
  },
  {
    title: "December, 2023",
    startDate: "01, Dec 2023",
    endDate: "31, Dec 2023",
    amount: 61000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "42000",
      overtimePay: "5500",
      bonuses: "5500",
      allowances: "2100",
    },
    deductions: "2000",
  },
  {
    title: "November, 2023",
    startDate: "01, Nov 2023",
    endDate: "30, Nov 2023",
    amount: 60000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "41000",
      overtimePay: "5200",
      bonuses: "5200",
      allowances: "2050",
    },
    deductions: "2000",
  },
  {
    title: "October, 2023",
    startDate: "01, Oct 2023",
    endDate: "31, Oct 2023",
    amount: 59000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "43000",
      overtimePay: "5600",
      bonuses: "5600",
      allowances: "2150",
    },
    deductions: "2000",
  },
  {
    title: "September, 2023",
    startDate: "01, Sep 2023",
    endDate: "30, Sep 2023",
    amount: 58000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "44000",
      overtimePay: "5800",
      bonuses: "5800",
      allowances: "2200",
    },
    deductions: "2000",
  },
  {
    title: "August, 2023",
    startDate: "01, Aug 2023",
    endDate: "31, Aug 2023",
    amount: 57000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "43500",
      overtimePay: "5700",
      bonuses: "5700",
      allowances: "2175",
    },
    deductions: "2000",
  },
  {
    title: "July, 2023",
    startDate: "01, Jul 2023",
    endDate: "31, Jul 2023",
    amount: 56000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "44500",
      overtimePay: "5900",
      bonuses: "5900",
      allowances: "2250",
    },
    deductions: "2000",
  },
  {
    title: "June, 2023",
    startDate: "01, Jun 2023",
    endDate: "30, Jun 2023",
    amount: 55000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "45000",
      overtimePay: "6000",
      bonuses: "6000",
      allowances: "2300",
    },
    deductions: "2000",
  },
  {
    title: "May, 2023",
    startDate: "01, May 2023",
    endDate: "31, May 2023",
    amount: 54000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "44500",
      overtimePay: "5900",
      bonuses: "5900",
      allowances: "2250",
    },
    deductions: "2000",
  },
  {
    title: "April, 2023",
    startDate: "01, Apr 2023",
    endDate: "30, Apr 2023",
    amount: 53000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "45500",
      overtimePay: "6100",
      bonuses: "6100",
      allowances: "2350",
    },
    deductions: "2000",
  },
  {
    title: "March, 2023",
    startDate: "01, Mar 2023",
    endDate: "31, Mar 2023",
    amount: 44000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "45500",
      overtimePay: "6100",
      bonuses: "6100",
      allowances: "2350",
    },
    deductions: "2000",
  },
  {
    title: "February, 2023",
    startDate: "01, Feb 2023",
    endDate: "28, Feb 2023",
    amount: 44000,
    id: generateRandomId(),
    employee: {
      ...employeeDetails,
    },
    employer: { ...employerDetails },
    earnings: {
      basicSalary: "45500",
      overtimePay: "6100",
      bonuses: "6100",
      allowances: "2350",
    },
    deductions: "2000",
  },
];

payslips.forEach((item) => {
  const earningsTotal = Object.values(item.earnings).reduce(
    (acc, val) => acc + parseFloat(val),
    0
  );
  const netAmount = earningsTotal - parseFloat(item.deductions);
  item.amount = netAmount;
});

export const getPayslips = () => payslips;

export const getPayslip = (id: string) => payslips.find((m) => m.id === id);
