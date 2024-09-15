import React, { useEffect } from 'react';

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Instagram Post */}
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/p/C_8FiQPNC8O/"
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: '0',
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '1px',
                                    maxWidth: '540px',
                                    minWidth: '500px',
                                    padding: '0',
                                    width: 'calc(100% - 2px)',
                                }}
                            />
                        </div>
                    </div>

                    {/* Second Instagram Post */}
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/p/C_fTbIOu7bn"
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: '0',
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '1px',
                                    maxWidth: '540px',
                                    minWidth: '500px',
                                    padding: '0',
                                    width: 'calc(100% - 2px)',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <script async defer src="//www.instagram.com/embed.js"></script>
            </div>
        </>
    );
};

export default Instagram;
