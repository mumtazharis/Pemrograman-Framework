import type {Metadata} from 'next';
import Image, {StaticImageData} from 'next/image';
import Image1 from '../../../public/images/image copy 2.png';
import { defaultMetadata } from '@/utils/metadata';
type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
}

function ProjectItem({name, url, urlDisplay, imageSrc}: ProjectItemProps){
    return (
        <li>
            <a href={url}>
                <div className='max-w-sm rounded everflow-hidden shadow-lg'>
                    <Image className='w-full' src={imageSrc} alt={name} />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{name}</div>
                    </div>
                    <div className='px-6 pb-4'>
                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-sembold text-gray-700 mr-2 mb-2'>{urlDisplay}</span>
                    </div>
                </div>
            </a>
        </li>
    );
}

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman Esai.',
  openGraph: {
    images: defaultMetadata.openGraph.images,
    url: defaultMetadata.openGraph.url,
  },
};

export default function Essays(){
    return (
      <div className='mt-16 px-8'>
        <header>
          <h1 className='font-bold text-4xl text-zinc-800'>Esai Saya</h1>
          <p className='text-base mt-6 text-zinc-600'>Berikut adalah beberapa esai yang telah saya kerjakan</p>
        </header>
        <div className='mt-16'>
          <h2 className='text-2xl'>Esai</h2>
          <ul className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-y-16 mt-8'>
              <ProjectItem name='Esai 1' url='https://example.com' urlDisplay='Medium' imageSrc={Image1}></ProjectItem>
              <ProjectItem name='Esai 2' url='https://example.com' urlDisplay='Medium' imageSrc={Image1}></ProjectItem>
          </ul>
        </div>
      </div>
    );
  }