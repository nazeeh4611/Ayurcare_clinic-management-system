import React, { useEffect, useState } from 'react';

function Speciality({ title, description, imgSrc, imgAlt, reverse, bg }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: bg,
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maxHeight: '600px', // Limit container height
    };

    const contentStyle = {
        flex: '0 1 50%',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const imgContainerStyle = {
        flex: '0 1 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        maxHeight: '600px', // Limit image container height
    };

    const imgStyle = {
        width: '100%',
        maxHeight: '400px', // Limit image height
        objectFit: 'contain', // Keep the image in proportion
        objectPosition: 'center',
        maxWidth: '100%',
    };

    const mobileBreakpoint = 768;
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile styles override
    if (isMobile) {
        return (
            <div style={{ width: '100%', backgroundColor: bg }}>
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '300px', // Limit height on mobile
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            objectPosition: 'center',
                        }}
                    />
                </div>
                <div style={{ padding: '30px 20px' }}>
                    <h2 style={{ marginBottom: '15px' }}>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h2 style={{ marginBottom: '20px' }}>{title}</h2>
                <p>{description}</p>
            </div>
            <div style={imgContainerStyle}>
                <img src={imgSrc} alt={imgAlt} style={imgStyle} />
            </div>
        </div>
    );
}

export default Speciality;
