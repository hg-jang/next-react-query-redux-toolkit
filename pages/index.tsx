import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'

import { RootState, useAppDispatch } from '../store/store';
import { increment, decrement } from '../store/reducers/sample'

import SectionCard from '../components/Card/SectionCard';
import AddToDoButton from '../components/Button/AddToDoButton';

export default function Home() {
  // const dispatch = useAppDispatch();
  // const { count } = useSelector((state: RootState) => state.sample);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-3 gap-8 h-screen p-8'>
        <SectionCard sectionName='해야 할 일' button={<AddToDoButton />} />
        <SectionCard sectionName='진행 중' />
        <SectionCard sectionName='완료' />
      </main>
    </div>
  )
}
