import React, { useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
    useEffect(() => {
        if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, []);

    return (
        <>
            {/* Centered Header */}
            <div className="flex justify-center items-center my-2">
                <div className="text-3xl font-medium text-center">Follow me on Instagram</div>
            </div>

            {/* Instagram Posts */}
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-1/3">
                    {/* First Instagram Post */}
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col justify-center items-center w-full">
                            <InstagramEmbed url="https://www.instagram.com/p/C_8FiQPNC8O/" width="100%" captioned />
                        </div>
                    </div>
                </div>
                <script async defer src="//www.instagram.com/embed.js"></script>
            </div>



        </>
    );
};

export default Instagram;
