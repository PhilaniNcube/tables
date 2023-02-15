

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Cards from './components/Cards';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <main className="bg-gray-100 min-h-screen w-screen">
          <Header />
          <Cards />
        </main>
  );
}
