import type {Metadata} from 'next';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import profile from '../../public/images/profile.png';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
  },
};

export default function Home() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className='font-bold text-4xl text-zinc-800'>Tentang Saya</h1>
      </header>
  {/* Social links */}
  <div className='mt-4 flex space-x-4'>
            <a 
              href='https://github.com/mumtazharis' 
              className='flex items-center gap-2 text-zinc-600 hover:text-black'
              target='_blank' 
              rel='noopener noreferrer'
            >
              <FaGithub className='text-xl text-[#181717]' /> GitHub
            </a>
            <a 
              href='https://www.facebook.com/mamtuz.hars' 
              className='flex items-center gap-2 text-zinc-600 hover:text-black'
              target='_blank' 
              rel='noopener noreferrer'
            >
              <FaFacebook className='text-xl text-[#1877F2]' /> Facebook
            </a>
            <a 
              href='https://t.me/mumtazharis' 
              className='flex items-center gap-2 text-zinc-600 hover:text-black'
              target='_blank' 
              rel='noopener noreferrer'
            >
              <FaTelegram className='text-xl text-[#0088cc]' /> Telegram
            </a>
          </div>
      {/* Foto + Bio */}
      <div className='mt-6 flex flex-col md:flex-row md:items-start md:space-x-6'>
        <Image 
          src={profile} 
          alt='Foto Ahmad Mumtaz Haris' 
          width={160} 
          height={160} 
          className='rounded-xl shadow-md' 
        />

        <div className='mt-4 md:mt-0'>
          <p className="text-zinc-700 leading-relaxed max-w-2xl">
            Hai! Saya Ahmad Mumtaz Haris, seorang pengembang perangkat lunak dengan minat di bidang machine learning, computer vision, dan pengembangan web. Saat ini saya sedang kuliah di Politeknik Negeri Malang dan aktif mengerjakan proyek-proyek pribadi maupun kolaboratif.
          </p>

        
        </div>
      </div>
    </div>
  );
}
