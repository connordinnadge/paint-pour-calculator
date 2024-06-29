import PaintCalculator from '@/components/PaintCalculator'
import Image from 'next/image'
import bgImage from '../../public/images/paint-pour.jpg'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { Metadata } from 'next'

const title = 'Acrylic Pour Paint Calculator | Connor Dinnadge'
const description =
    'Calculate the exact paint needed for your acrylic pour projects. Choose your canvas shape and size, and get precise paint volume recommendations for perfect consistency. Ideal for artists seeking flawless results.'
const ogImage = '/images/meta_image.jpg'
const twitterImage = '/images/meta_image.jpg'

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: [
        'acrylic pour paint calculator',
        'paint pouring calculator',
        'acrylic pouring mix calculator',
        'acrylic pour calculator',
        'pour painting mix calculator',
        'acrylic paint pouring ratios',
        'acrylic pour paint mix ratios',
        'paint pouring consistency calculator',
        'acrylic pour paint measurements',
        'pour painting measurements',
        'acrylic pouring medium calculator',
        'paint pouring formula',
        'acrylic pour paint guide',
        'acrylic pour paint tips',
        'acrylic pouring techniques',
        'acrylic paint mixing calculator',
        'acrylic pour painting tips',
        'pour paint consistency guide',
        'acrylic pour paint mix guide',
        'paint pouring supplies',
    ],
    openGraph: {
        title: title,
        description: description,
        url: 'https://www.paint-calculator.connordinnadge.com',
        siteName: 'Acrylic Pour Paint Calculator',
        images: [
            {
                url: ogImage,
                width: 600,
                height: 400,
            },
        ],
        locale: 'en_UK',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        creator: '@connordinnadge',
        images: [
            {
                url: twitterImage,
                width: 600,
                height: 400,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

export default function HomePage() {
    return (
        <main>
            <section className='relative flex h-[100vh] w-full flex-col items-center justify-center px-3 py-5 text-center'>
                <Image
                    src={bgImage}
                    alt='Acrylic Pour Paint Calculator'
                    layout='fill'
                    objectFit='cover'
                    className='z-0'
                    priority={true}
                />
                <div className='absolute left-0 top-0 h-[100vh] w-full bg-black bg-opacity-30'></div>
                <Card className='relative z-10  rounded-2xl text-center'>
                    <CardHeader className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Acrylic Pour Paint Calculator</h1>
                        <p className='md:4/6 w-5/6 text-center'>
                            Calculate the perfect paint mix for stunning acrylic pours. Enter your canvas size and
                            desired paint consistency to get started!
                        </p>
                    </CardHeader>
                    <CardContent>
                        <PaintCalculator />
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
