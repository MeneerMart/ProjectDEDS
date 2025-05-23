import React, { useState, useEffect } from 'react';

const App = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="shadow-xl rounded-2xl overflow-hidden bg-white">
                <iframe
                    title="Project DEDS v2 (1)"
                    width={dimensions.width - 20}
                    height={dimensions.height - 20}
                    src="https://app.powerbi.com/view?r=eyJrIjoiYTYxYTQ1ZGMtNGQxZi00OTFiLTk3YmQtM2U1NGJlNGViNzgxIiwidCI6ImEyNTg2YjliLWY4NjctNGIzYy05MzYzLTViNDM1YzVkYmM0NSIsImMiOjh9"
                    frameborder="0"
                    allowFullScreen="true">
                </iframe>
            </div>
        </div>
    );
};

export default App;