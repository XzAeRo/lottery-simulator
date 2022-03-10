import Image from './Image'
import bg from '../public/images/bg.png'

export default function Background() {
    return (
        <>
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[108rem] flex-none flex justify-end">
                <Image src={bg} alt="background image" className='w-[90rem] flex-none max-w-none block' />
            </div>
        </div>
        </>
    )
}