/* import {Card } from '@/app/ui/dashboard/cards'; */
import IncomeChart from '@/app/ui/dashboard/income-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { poppins } from '@/app/ui/fonts';

import CardWrapper from '@/app/ui/dashboard/cards';

import {
  fetchCardData,
/*   fetchIncome, */
  /* fetchLatestInvoices  */ 
} from '@/app/lib/data';

import { Suspense } from 'react';
import { 
  IncomeChartSkeleton, 
  LatestInvoicesSkeleton, 
  CardsSkeleton 
} from '@/app/ui/skeletons';

export default async function Page() {
  /* const income = await fetchIncome(); */
 /* const latestInvoices = await fetchLatestInvoices(); */ 
  
  /* const {
    totalFulfilledInvoices,
    totalAwaitingInvoices,
    numberOfInvoices,
    numberOfSellers

  } = await fetchCardData(); */

  return (
    <main className="rounded-xl bg-[#F2F2F2] p-6">
      <h1
        className={`${poppins.className} mb-4 text-center text-xl text-black md:text-3xl`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<IncomeChartSkeleton />}>
          <IncomeChart />
        </Suspense>
        {/* <IncomeChart income={income} /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
  