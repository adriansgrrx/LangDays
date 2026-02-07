import React from 'react';
import { LoaderIcon } from 'lucide-react';
import VideoBG from './VideoBG';
import ImageBG from './ImageBG';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-white">
            <div>
                <ImageBG />
                {/* Dark Overlay for better text readability */}
                <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md"></div>
            </div>
            <span className="loading loading-dots loading-sm"></span>
        </div>
    );
};

export default Loader;